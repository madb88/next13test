import { getCategoriesList } from "@/api/categories";

export const generateStaticParams = async () => {
	const categories = await getCategoriesList();

	return categories.map((category) => ({
		categoryName: category.name,
	}));
};

export default async function CategoryPage() {
	return <div>{"Category Page"}</div>;
}
