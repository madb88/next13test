import { executeGraphqlQuery } from "./grapqhlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategoryNameDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductsListNew = async (
	first?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductsGetListDocument,
		{ first: first, skip: skip },
	);

	return {
		products: graphqlResponse.products,
		productsConnection: graphqlResponse.productsConnection,
	};
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductGetByIdDocument,
		{ id: id },
	);

	return graphqlResponse.product;
};

export const getProductsByCategoryName = async (
	categoryName: string,
	limit: number,
) => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductsGetByCategoryNameDocument,
		{ categoryName: categoryName, limit: limit },
	);

	return graphqlResponse.categories;
};
