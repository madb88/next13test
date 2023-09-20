import { Suspense } from "react";
import Loader from "./Loader";
import { ProductCoverImage } from "./ProductCoverImage";
import { ProductDescription } from "./ProductDescription";
import { type ProductFragmentFragment } from "@/gql/graphql";

type ProductProps = {
	product: ProductFragmentFragment;
};

export const Product = ({ product }: ProductProps) => {
	console.log(product);
	return (
		<section className="flex flex-col gap-3">
			<article className="flex gap-3">
				{product.images && product.images[0] && (
					<ProductCoverImage
						src={product.images[0].url}
						alt={product.name}
					/>
				)}
				<ProductDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={<Loader />}>
					{/* <SuggestedProducts /> */}
				</Suspense>
			</aside>
		</section>
	);
};
