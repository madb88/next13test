export default async function CollectionDetailPage({
	params,
}: {
	params: { collectionName: string };
}) {
	return `Nazwa kolekcji ${params.collectionName}`;
}
