import { executeGraphqlQuery } from "./grapqhlApi";
import {
	ProductGetByIdDocument,
	type ProductOrderByInput,
	ProductsGetByCategoryNameDocument,
	ProductsGetByCollectionNameDocument,
	ProductsGetListDocument,
	ProductsSearchByNameDocument,
	ProductUpdateRatingDocument,
} from "@/gql/graphql";

export const getProductsListNew = async (
	first?: number,
	skip?: number,
	order?: ProductOrderByInput,
) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ProductsGetListDocument,
		variables: { first: first, skip: skip, orderBy: order },
		next: {
			tags: ["products"],
		},
	});

	return {
		products: graphqlResponse.products,
		productsConnection: graphqlResponse.productsConnection,
	};
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ProductGetByIdDocument,
		variables: { id: id },
		next: {
			tags: ["products"],
		},
	});

	return graphqlResponse.product;
};

export const getProductsByCategoryName = async (
	categoryName: string,
	first?: number,
	skip?: number,
) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ProductsGetByCategoryNameDocument,
		variables: {
			categoryName: categoryName,
			first: first,
			skip: skip,
		},
	});

	return {
		products: graphqlResponse.products,
		count: graphqlResponse.productsConnection.aggregate.count,
	};
};

export const getProductsByName = async (name: string) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ProductsSearchByNameDocument,
		variables: { name: name },
	});

	return graphqlResponse.products;
};

export const getProductsByCollectionName = async (
	collectionName: string,
) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ProductsGetByCollectionNameDocument,
		variables: { collectionName: decodeURIComponent(collectionName) },
	});

	return graphqlResponse.collections;
};

export const updateProductReviewRating = async (
	productId: string,
	rating: number,
) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ProductUpdateRatingDocument,
		variables: { productId: productId, rating: rating },
	});

	return graphqlResponse.updateProduct;
};
