import { notFound } from "next/navigation";
import { type Metadata } from "next/types";
import { getProductsByCollectionName } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> => {
	return {
		title: decodeURIComponent(params.collectionName),
	};
};

export default async function CollectionDetailPage({
	params,
}: {
	params: { collectionName: string };
}) {
	const productsByCollection = await getProductsByCollectionName(
		params.collectionName,
	);
	if (!productsByCollection[0]) notFound();

	return (
		<>
			<h1>{decodeURIComponent(params.collectionName)}</h1>
			<ProductList products={productsByCollection[0].products} />;
		</>
	);
}
