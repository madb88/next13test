// import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
// import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
// import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
// import { SuggestedProducts } from "@/app/ui/organisms/SuggestedProducts";
import { Product } from "@/app/ui/atoms/Product";

// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> => {
// 	// const product = await getProductById(params.productId);
// 	return {
// 		// title: product && product.name,
// 		// description: product.description,
// 		// openGraph: {
// 		// 	title: product.name,
// 		// 	description: product.description,
// 		// 	images: [
// 		// 		{ url: product.coverImage ? product.coverImage.src : "" },
// 		// 	],
// 		// },
// 	};
// };

export default async function ProductDetailsPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	if(!product) {
		return notFound()
	}

	return <Product product={product} />;
}
