import { getProductsList, getProductsListNew } from "@/api/products";
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
	const productsPerPage = 4;

	const allProducts = await getProductsListNew();
	const offset = (Number(params.pageNumber) - 1) * productsPerPage;
	const products = await getProductsList(productsPerPage, offset);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList products={products} />
			</section>
			<Pagination
				count={allProducts.length}
				pageSize={4}
				link={"/products/"}
			/>
		</section>
	);
}
