import { type ProductItemType } from "@/app/ui/types";
import {
	ProductsGetListDocument,
	type TypedDocumentString,
} from "@/gql/graphql";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const executeGraphqlQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL)
		throw new Error("GRAPHQL_URL is not defined");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: Array<{ message: string }> }
		| { data: T; errors?: undefined };

	const graphqlResponse =
		(await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};

export const getProductsList = async (
	limit?: number,
	offset?: number,
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${limit}&offset=${offset}`,
	);

	const productsResponse =
		(await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(
		productResponseItemToProductItemType,
	);

	return products;
};

export const getProductsListNew = async (): Promise<
	ProductItemType[]
> => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductsGetListDocument,
		{},
	);

	return graphqlResponse.products.map((p) => ({
		id: p.id,
		name: p.name,
		price: p.price,
		category: p.categories[0]?.name || "",
		coverImage: p.images[0] && {
			alt: p.name,
			src: p.images[0].url,
		},
		description: p.description,
	}));
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);

	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		price: product.price,
		category: product.category,
		coverImage: { src: product.image, alt: product.title },
		description: product.description,
	};
};
