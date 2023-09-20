import { type ProductFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/app/utils";

type ProductDescriptionProps = {
	product: ProductFragmentFragment;
};

export const ProductDescription = ({
	product,
}: ProductDescriptionProps) => {
	return (
		<div className="flex flex-col gap-3">
			<h1 className="text-3xl font-bold">{product.name}</h1>
			<p className="text-lg">{product.description}</p>
			<h3 className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>{" "}
				{formatMoney(product.price / 100)}$
			</h3>
		</div>
	);
};
