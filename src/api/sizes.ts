import { executeGraphqlQuery } from "./grapqhlApi";
import { SizesGetListDocument } from "@/gql/graphql";

export const getSizes = async (id: string) => {
	const graphqlResponse = await executeGraphqlQuery({
		query: SizesGetListDocument,
		variables: { id: id },
	});

	return graphqlResponse.productSizeVariants;
};
