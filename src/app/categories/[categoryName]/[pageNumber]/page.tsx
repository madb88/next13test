import { notFound } from "next/navigation";
import { getProductsByCategoryName } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { Pagination } from "@/app/ui/molecules/Pagination";

export default async function ProductDetailsPage({
	params,
}: {
	params: { pageNumber: string; categoryName: string };
}) {
	const offset = (Number(params.pageNumber) - 1) * 4;

	const productsByCategoryAll = await getProductsByCategoryName(
		params.categoryName,
	);

	const productsByCategory = await getProductsByCategoryName(
		params.categoryName,
		4,
		offset,
	);

	if (!productsByCategory[0] || !productsByCategoryAll[0]) notFound();

	return (
		<>
			<ProductList products={productsByCategory[0].products} />
			<Pagination
				count={productsByCategoryAll[0].products.length}
				pageSize={4}
				link={`/categories/${params.categoryName}/`}
			/>
		</>
	);
}
