import { ProductList } from "../ui/organisms/ProductList";
import { getProductsByName } from "@/api/products";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] };
}) {
	if (searchParams.query) {
		const products = await getProductsByName(
			searchParams.query.toString(),
		);
		return <ProductList products={products} />;
	}
}
