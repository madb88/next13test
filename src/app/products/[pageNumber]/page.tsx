import { getProductsListNew } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";
import "server-only";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { Sorting } from "@/app/ui/organisms/Sorting";
import { type ProductOrderByInput } from "@/gql/graphql";

export const generateStaticParams = async () => {
	const { productsConnection } = await getProductsListNew();
	const pagesCount = Math.ceil(
		productsConnection.aggregate.count / 4,
	);
	return Array.from({ length: pagesCount }).map((_, index) => ({
		pageNumber: String(index + 1),
	}));
};

export default async function SepareteProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const offset = (Number(params.pageNumber) - 1) * 4;
	const { products, productsConnection } = await getProductsListNew(
		4,
		offset,
		searchParams.sort as ProductOrderByInput,
	);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<Sorting />
			<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList products={products} />
			</section>
			<Pagination
				count={productsConnection.aggregate.count}
				pageSize={4}
				link={"/products/"}
			/>
		</section>
	);
}
