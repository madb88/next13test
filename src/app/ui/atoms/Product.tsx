import { Suspense } from "react";
import { revalidateTag } from "next/cache";
import { SuggestedProducts } from "../organisms/SuggestedProducts";
import Loader from "./Loader";
import { ProductCoverImage } from "./ProductCoverImage";
import { ProductDescription } from "./ProductDescription";
import { AddToCartButton } from "./AddToCartButton";
import { type ProductFragmentFragment } from "@/gql/graphql";
import { getOrCreateCart, addItemToCart } from "@/api/cart";

type ProductProps = {
	product: ProductFragmentFragment;
};

export const Product = ({ product }: ProductProps) => {
	async function addToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		await addItemToCart(cart.id, product.id);

		//revalidate
		revalidateTag("cart");
	}

	return (
		<section className="flex flex-col gap-3">
			<article className="flex gap-3">
				{product.images && product.images[0] && (
					<ProductCoverImage
						src={product.images[0].url}
						alt={product.name}
					/>
				)}
				<section className="flex flex-col">
					<ProductDescription product={product} />
					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
				</section>
			</article>
			<aside>
				<Suspense fallback={<Loader />}>
					{product.categories[0] && (
						<Suspense fallback={<Loader />}>
							<>
								<SuggestedProducts
									categoryName={product.categories[0].name}
								/>
							</>
						</Suspense>
					)}
				</Suspense>
			</aside>
		</section>
	);
};
