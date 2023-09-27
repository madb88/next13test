"use server";

import { executeGraphqlQuery } from "@/api/grapqhlApi";
import { CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = (
	itemId: string,
	quantity: number,
) => {
	return executeGraphqlQuery({
		query: CartSetItemQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
	});
};
