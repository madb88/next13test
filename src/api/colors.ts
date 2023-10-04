import { executeGraphqlQuery } from "./grapqhlApi";
import { ColorsGetListDocument } from "@/gql/graphql";

export const getColors = async (id: string) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: ColorsGetListDocument,
		variables: { id: id },
	});

	return graphqlResponse.productColorVariants;
};
