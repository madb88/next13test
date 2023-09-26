import { ProductList } from "./ProductList";
import { getProductsByCategoryName } from "@/api/products";

type SuggestedProductsProps = {
	categoryName: string;
};

export const SuggestedProducts = async ({
	categoryName,
}: SuggestedProductsProps) => {
	const categories = await getProductsByCategoryName(categoryName, 4);

	if (!categories) {
		return <>There are no similar products for this category</>;
	}

	return (
		<div data-testid="related-products">
			<ProductList products={categories.products} />
		</div>
	);
};
