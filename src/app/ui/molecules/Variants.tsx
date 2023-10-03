type VariantProps = {
	id: string;
	name: string;
};

type VariantsProps = {
	variants: VariantProps[];
};

export const Variants = ({ variants }: VariantsProps) => {
	return (
		<select>
			{variants.map((variant) => {
				return <option key={variant.id}>{variant.name}</option>;
			})}
		</select>
	);
};
