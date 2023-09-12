import { type ReactNode } from "react";

export default function CategoryProductLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <>{children}</>;
}

export const generateStaticParams = async () => {
	return [
		{
			category: "category1",
		},
		{
			category: "category2",
		},
	];
};
