export type ProductItemType = {
	id: string;
	name: string;
	description: string;
	price: number;
	categories: { name: string }[];
	images: { url: string }[];
};
