import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/app/ui/organisms/SuggestedProducts";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products
// 		.map((product) => ({
// 			product: product.id,
// 		}))
// 		.slice(0, 2);
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - sklep internetowy`,
			description: product.description,
			images: [{ url: product.coverImage.src }],
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
		<>
			<article className="max-w-xs">
				<ProductCoverImage
					src={product.coverImage.src}
					alt={product.coverImage.alt}
				/>
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback="Loading">
					<SuggestedProducts />
				</Suspense>
			</aside>
		</>
	);
}
