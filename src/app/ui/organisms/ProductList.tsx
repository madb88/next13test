import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductListProps = {
	products: ProductListItemFragmentFragment[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
