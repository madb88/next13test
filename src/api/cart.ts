import { cookies } from "next/headers";
import { executeGraphqlQuery } from "./grapqhlApi";
import {
	type CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
} from "@/gql/graphql";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();

	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}

	return cart.createOrder;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphqlQuery(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart.order) {
			return cart.order;
		}
	}
}

export function createCart() {
	return executeGraphqlQuery(CartCreateDocument, {});
}

export async function addItemToCart(
	orderId: string,
	productId: string,
) {
	const { product } = await executeGraphqlQuery(
		ProductGetByIdDocument,
		{
			id: productId,
		},
	);
	if (!product) {
		throw new Error("Product not found");
	}
	await executeGraphqlQuery(CartAddProductDocument, {
		orderId,
		productId,
		total: product.price,
	});
}
