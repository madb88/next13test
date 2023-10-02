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
		next: {
			tags: ["reviews"],
		},
		variables: { product: { id: product.id } },
	});

	return graphqlResponse.reviews;
};

// export async function addReview(
// 	headline: string,
// 	name: string,
// 	content: string,
// 	rating: number,
// 	productId: string,
// 	email: string,
// ) {
// 	await executeGraphqlQuery({
// 		query: ReviewCreateDocument,
// 		variables: {
// 			headline,
// 			name,
// 			content,
// 			rating,
// 			productId,
// 			email,
// 		},
// 		isMutation: true,
// 	});
// }
