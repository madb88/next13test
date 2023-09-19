import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navigation from "./ui/organisms/Navigation";

// const inter = Inter({ subsets: ["latin", "latin-ext"] });

const montserrat = Montserrat({
	subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
					<Navigation />
				</header>
				<section className="mx-w-md md:max-md: mx-auto p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">@2023</p>
				</footer>
			</body>
		</html>
	);
}
