"use server";
import Stripe from "stripe";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphqlQuery } from "@/api/grapqhlApi";
import {
	CartRemoveProductDocument,
	CartSetItemQuantityDocument,
} from "@/gql/graphql";
import { getCartFromCookies } from "@/api/cart";

export const removeItem = (itemId: string) => {
	return executeGraphqlQuery({
		query: CartRemoveProductDocument,
		variables: { itemId },
		isMutation: true,
	});
};

export const changeItemQuantity = (
	itemId: string,
	quantity: number,
) => {
	return executeGraphqlQuery({
		query: CartSetItemQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
	});
};

export async function handlePaymentAction() {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("	MiSSING KEY");
	}
	const cart = await getCartFromCookies();

	if (!cart) {
		return;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product?.name || "",
					description: item.product?.description || "",
					images: item.product?.images.map((i) => i.url),
				},
				unit_amount: item.product?.price || 0,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url:
			"http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel",
	});

	if (!checkoutSession.url) {
		throw new Error("Something went wrong");
	}
	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
