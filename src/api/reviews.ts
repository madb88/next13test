import { executeGraphqlQuery } from "./grapqhlApi";
import {
	type ProductWhereInput,
	ReviewsForProductDocument,
} from "@/gql/graphql";

export const getReviewsByProduct = async (
	product: ProductWhereInput,
) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ReviewsForProductDocument,
		variables: { product: { id: product.id } },
	});

	console.log(graphqlResponse);
	return graphqlResponse.reviews;
};
