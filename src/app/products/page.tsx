import { getProductsList } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";
import "server-only";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<section className="mx-w-md md:max-md: mx-auto p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
