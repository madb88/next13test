import { Variants } from "../molecules/Variants";
import { type ProductFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/app/utils";
import { getColors } from "@/api/colors";
import { getSizes } from "@/api/sizes";

type ProductDescriptionProps = {
	product: ProductFragmentFragment;
};

export const ProductDescription = async ({
	product,
}: ProductDescriptionProps) => {
	const colors = await getColors(product.id);
	const sizes = await getSizes(product.id);

	return (
		<div data-testid="single-product" className="flex flex-col gap-3">
			<h1 className="text-3xl font-bold">{product.name.trim()}</h1>
			<p className="text-lg">{product.description}</p>
			<h2>{product.categories.map((category) => category.name)}</h2>
			<h3 className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(product.price / 100)}$
			</h3>
			<div>
				<p>Rating</p>
				<p data-testid="product-rating">
					{product.rating && product.rating.toFixed(2)}
				</p>
			</div>
			<p>
				Color: <Variants variants={colors} />
			</p>
			<p>
				Size: <Variants variants={sizes} />
			</p>
		</div>
	);
};
