import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";

import { Product } from "@/app/ui/atoms/Product";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product && product.name,
		description: product && product.description,
		openGraph: {
			title: (product && product.name) || "",
			images: [
				{
					url: (product && product.images[0]?.url) || "",
					width: 800,
					height: 600,
					alt: (product && product.name) || "",
				},
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

	if (!product) {
		return notFound();
	}

	return <Product product={product} />;
}
