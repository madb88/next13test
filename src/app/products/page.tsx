import { ProductList } from "../ui/organisms/ProductList";
import { type ProductItemType } from "../ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Koszulka 1",
		category: "Accessories",
		price: 1221,
		coverImage: { alt: "bluza", src: "/product_1.jpeg" },
	},
	{
		id: "2",
		name: "Koszulka 2",
		category: "Accessories",
		price: 1223,
		coverImage: { alt: "bluza", src: "/product_1.jpeg" },
	},
	{
		id: "3",
		name: "Koszulka 3",
		category: "Accessories",
		price: 1442,
		coverImage: { alt: "bluza", src: "/product_1.jpeg" },
	},
	{
		id: "4",
		name: "Koszulka 4",
		category: "Accessories",
		price: 1621,
		coverImage: { alt: "bluza", src: "/product_1.jpeg" },
	},
];

export default function Products() {
	return (
		<section className="mx-w-md md:max-md: mx-auto p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
