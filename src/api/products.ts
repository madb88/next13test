import { executeGraphqlQuery } from "./grapqhlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategoryNameDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductsListNew = async () => {
	const graphqlResponse = await executeGraphqlQuery(
		ProductsGetListDocument,
		{},
	);

	return graphqlResponse.products;
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
