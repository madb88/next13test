import { notFound } from "next/navigation";
import { getProductsByCollectionName } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";

export default async function CollectionDetailPage({
	params,
}: {
	params: { collectionName: string };
}) {
	const productsByCollection = await getProductsByCollectionName(
		params.collectionName,
	);
	console.log(productsByCollection);
	if (!productsByCollection[0]) notFound();

	return <ProductList products={productsByCollection[0].products} />;
}
