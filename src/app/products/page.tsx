/* eslint-disable @typescript-eslint/no-unused-vars */
import { redirect } from "next/navigation";
import { ProductList } from "../ui/organisms/ProductList";
import { getProductsByName } from "@/api/products";

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { [key: string]: string | string[] };
}) {
	if (searchParams.search) {
		const products = await getProductsByName(
			searchParams.search.toString(),
		);
		return <ProductList products={products} />;
	}
	redirect("/products/1");
}
