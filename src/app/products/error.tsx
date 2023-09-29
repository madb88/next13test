export default function ErrorPage({
	error,
}: {
	error: Error & { digest: string };
	reset: () => void;
}) {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<div className="h12 bg-red w-12 animate-bounce">
				Error... {error.digest}
			</div>
		</div>
	);
}
