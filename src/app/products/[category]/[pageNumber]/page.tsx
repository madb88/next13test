export const generateStaticParams = async ({
	params,
}: {
	params: { category: string };
}) => {
	if (params.category === "category1") {
		return [
			{ pageNumber: "1" },
			{ pageNumber: "2" },
			{ pageNumber: "4" },
		];
	} else {
		return [{ pageNumber: "3" }, { pageNumber: "6" }];
	}
};

export default function CategoryProductPage({
	params,
}: {
	params: { categrory: string; pageNumber: string };
}) {
	return (
		<h1>
			Produkt z kategorii {params.categrory}, stronga
			{params.pageNumber}
		</h1>
	);
}
