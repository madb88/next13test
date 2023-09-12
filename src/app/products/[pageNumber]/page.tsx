import { getProductsList } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";
import "server-only";
import { Pagination } from "@/app/ui/molecules/Pagination";

export const generateStaticParams = async () => {
	const allProducts = await getProductsList();
	const pagesCount = Math.ceil(allProducts.length / 4);

	return Array.from({ length: pagesCount }).map((_, index) => ({
		pageNumber: String(index + 1),
	}));
};

export default async function SepareteProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const allProducts = await getProductsList();

	const offset = (Number(params.pageNumber) - 1) * 4;
	const products = await getProductsList(4, offset);

	return (
		<section className="mx-w-md md:max-md: mx-auto p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
			<Pagination
				count={allProducts.length}
				pageSize={4}
				link={"/products/"}
			/>
		</section>
	);
}
