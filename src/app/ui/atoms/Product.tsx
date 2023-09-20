import { Suspense } from "react";
import { SuggestedProducts } from "../organisms/SuggestedProducts";
import Loader from "./Loader";
import { ProductCoverImage } from "./ProductCoverImage";
import { ProductDescription } from "./ProductDescription";
import { type ProductFragmentFragment } from "@/gql/graphql";

type ProductProps = {
	product: ProductFragmentFragment;
};

export const Product = ({ product }: ProductProps) => {
	const { variants } = product;
	console.log(variants);

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
					{product.categories[0] && (
						<SuggestedProducts
							categoryName={product.categories[0].name}
						/>
					)}
				</Suspense>
			</aside>
		</section>
	);
};
