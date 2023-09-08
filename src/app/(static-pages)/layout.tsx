export default function StaticPages({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mx-auto max-w-md text-center">{children}</div>
	);
}
