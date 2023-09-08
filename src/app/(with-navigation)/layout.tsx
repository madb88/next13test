export default function NavigationPages({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section className="mx-w-md md:max-md: mx-auto p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				{children}
			</section>
			<footer>
				<p className="text-center text-sm text-gray-500">@2023</p>
			</footer>
		</>
	);
}
