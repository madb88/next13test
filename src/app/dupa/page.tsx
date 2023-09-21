export default async function CollectionDetailPage({
	params,
	searchParams,
}: {
	params: { search: string };
	searchParams: { [key: string]: string | string[] };
}) {
	if (searchParams.search) {
		return `${searchParams.search.toString()}`;
	}
	return `Nazwa kolekcji ${params.search}`;
}
