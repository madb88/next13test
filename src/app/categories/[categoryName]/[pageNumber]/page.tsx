export default async function ProductDetailsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	return `Number strony ${params.pageNumber}`;
}
