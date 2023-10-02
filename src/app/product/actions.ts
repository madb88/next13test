"use server";
import { executeGraphqlQuery } from "@/api/grapqhlApi";
import { ReviewCreateDocument } from "@/gql/graphql";

export async function addReview(
	headline: string,
	name: string,
	content: string,
	rating: number,
	productId: string,
	email: string,
) {
	await executeGraphqlQuery({
		query: ReviewCreateDocument,
		variables: {
			headline,
			name,
			content,
			rating,
			productId,
			email,
		},
		isMutation: true,
	});
}
