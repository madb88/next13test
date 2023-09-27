import { executeGraphqlQuery } from "./grapqhlApi";
import { GetCategoriesDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphqlQuery({
		query: GetCategoriesDocument,
		variables: {},
	});

	return graphqlResponse.categories;
};
