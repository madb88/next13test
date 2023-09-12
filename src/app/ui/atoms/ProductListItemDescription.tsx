import { type ProductItemType } from "../types";
import { formatMoney } from "@/app/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { name, category, price, description },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between gap-3">
			<div>
				<h1 className="text-sm font-semibold text-gray-700">
					Name: {name}
				</h1>
				<h3 className="text-sm font-semibold text-gray-700">
					Description: {description}
				</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span>
					{category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>{" "}
				{formatMoney(price / 100)}$
			</p>
		</div>
	);
};
