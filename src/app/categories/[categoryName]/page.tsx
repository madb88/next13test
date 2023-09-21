import { redirect } from "next/navigation";

export default async function CategoryPage({
	params,
}: {
	params: { categoryName: string };
}) {
	redirect(`/categories/${params.categoryName}/1`);
}
