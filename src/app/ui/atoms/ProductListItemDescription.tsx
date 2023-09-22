import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/app/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItemDescription = ({
	product: { name, price, categories },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between gap-3">
			<div>
				<h2 className="text-sm font-semibold text-gray-700">
					{name}
				</h2>
				<p className="text-sm font-semibold text-gray-700">
					{categories.map((category) => category.name)}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>{" "}
				{formatMoney(price / 100)}$
			</p>
		</div>
	);
};
