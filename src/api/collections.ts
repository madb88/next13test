import { executeGraphqlQuery } from "./grapqhlApi";
import { GetCollectionsDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphqlQuery({
		query: GetCollectionsDocument,
		variables: {},
	});

	return graphqlResponse.collections;
};
