import { executeGraphqlQuery } from "./grapqhlApi";
import { GetCollectionsDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphqlQuery(
		GetCollectionsDocument,
		{},
	);

	return graphqlResponse.collections;
};
