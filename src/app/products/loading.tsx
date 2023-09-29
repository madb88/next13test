export default function Loading() {
	return (
		<div
			aria-busy="true"
			className="flex h-screen w-screen items-center justify-center"
		>
			<div className="h12 bg-red w-12">Loading...</div>;
		</div>
	);
}
