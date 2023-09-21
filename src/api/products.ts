import { executeGraphqlQuery } from "./grapqhlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategoryNameDocument,
	ProductsGetByCollectionNameDocument,
	ProductsGetListDocument,
	ProductsSearchByNameDocument,
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
	first?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductsGetByCategoryNameDocument,
		{ categoryName: categoryName, first: first, skip: skip },
	);

	return graphqlResponse.categories;
};

export const getProductsByName = async (name: string) => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductsSearchByNameDocument,
		{ name: name },
	);

	return graphqlResponse.products;
};

export const getProductsByCollectionName = async (
	collectionName: string,
) => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductsGetByCollectionNameDocument,
		{ collectionName: decodeURIComponent(collectionName) },
	);

	return graphqlResponse.collections;
};
