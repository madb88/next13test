import { notFound } from "next/navigation";
import { getProductsByCategoryName } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";

export default async function CategoryPage({
	params,
}: {
	params: { categoryName: string };
}) {
	const productsByCategory = await getProductsByCategoryName(
		params.categoryName,
	);

	if (!productsByCategory[0]) notFound();

	return <ProductList products={productsByCategory[0].products} />;
}
