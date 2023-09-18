import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/app/ui/organisms/SuggestedProducts";
import Loader from "@/app/ui/atoms/Loader";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{ url: product.coverImage ? product.coverImage.src : "" },
			],
		},
	};
};

export default async function ProductDetailsPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<section className="flex flex-col gap-3">
			<article className="flex gap-3">
				{product.coverImage && (
					<ProductCoverImage
						src={product.coverImage.src}
						alt={product.coverImage.alt}
					/>
				)}
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={<Loader />}>
					<SuggestedProducts />
				</Suspense>
			</aside>
		</section>
	);
}
