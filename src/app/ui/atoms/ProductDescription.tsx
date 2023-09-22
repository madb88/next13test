import { type ProductFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/app/utils";

type ProductDescriptionProps = {
	product: ProductFragmentFragment;
};

export const ProductDescription = ({
	product,
}: ProductDescriptionProps) => {
	console.log(product);
	return (
		<div data-testid="single-product" className="flex flex-col gap-3">
			<h1 className="text-3xl font-bold">{product.name.trim()}</h1>
			<p className="text-lg">{product.description}</p>
			<h2>{product.categories.map((category) => category.name)}</h2>
			<h3 className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(product.price / 100)}$
			</h3>
		</div>
	);
};
