import { cookies } from "next/headers";
import { executeGraphqlQuery } from "./grapqhlApi";
import {
	type CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
	CartGetOrderByIdDocument,
	CartSetItemQuantityDocument,
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

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
	});

	return cart.createOrder;
}

export async function getOrderById(orderId: string) {
	const { order } = await executeGraphqlQuery({
		query: CartGetOrderByIdDocument,
		variables: {
			orderId: orderId,
		},
	});

	if (!order) {
		throw new Error("Failed to fetch order");
	}

	return order.orderItems;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphqlQuery({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
			cache: "no-store",
			isMutation: true,
		});
		if (cart.order) {
			return cart.order;
		}
	}
}

export function createCart() {
	return executeGraphqlQuery({
		query: CartCreateDocument,
		variables: {},
		cache: "no-store",
		isMutation: true,
	});
}

export async function addItemToCart(
	orderId: string,
	productId: string,
) {
	const { product } = await executeGraphqlQuery({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
		cache: "no-store",
	});
	if (!product) {
		throw new Error("Product not found");
	}

	const existingOrder = await getCartFromCookies();
	if (existingOrder) {
		const existingItem = existingOrder.orderItems.find(
			(i) => i.product?.id === productId,
		);
		if (existingItem) {
			return executeGraphqlQuery({
				query: CartSetItemQuantityDocument,
				variables: {
					itemId: existingItem.id,
					quantity: existingItem.quantity + 1,
				},
				cache: "no-store",
				isMutation: true,
			});
		}
	}

	await executeGraphqlQuery({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			total: product.price,
		},
		cache: "no-store",
		isMutation: true,
	});
}
