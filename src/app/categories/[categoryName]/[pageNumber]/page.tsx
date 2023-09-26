import { notFound } from "next/navigation";
import { type Metadata } from "next/types";
import { getProductsByCategoryName } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { Pagination } from "@/app/ui/molecules/Pagination";

export const generateMetadata = async ({
	params,
}: {
	params: { categoryName: string };
}): Promise<Metadata> => {
	return {
		title: params.categoryName,
	};
};

export default async function ProductDetailsPage({
	params,
}: {
	params: { pageNumber: string; categoryName: string };
}) {
	const offset = (Number(params.pageNumber) - 1) * 4;

	const productsByCategory = await getProductsByCategoryName(
		params.categoryName,
		4,
		offset,
	);

	if (!productsByCategory.products) notFound();

	return (
		<>
			<h2>{params.categoryName}</h2>
			<ProductList products={productsByCategory.products} />
			<Pagination
				count={productsByCategory.count}
				pageSize={4}
				link={`/categories/${params.categoryName}/`}
			/>
		</>
	);
}
