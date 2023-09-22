import { ProductList } from "./ui/organisms/ProductList";
import { getProductsListNew } from "@/api/products";

export default async function Home() {
	const { products } = await getProductsListNew();

	return <ProductList products={products} />;
}
