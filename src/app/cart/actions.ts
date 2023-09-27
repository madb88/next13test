"use server";

import { executeGraphqlQuery } from "@/api/grapqhlApi";
import {
	CartRemoveProductDocument,
	CartSetItemQuantityDocument,
} from "@/gql/graphql";

export const removeItem = (itemId: string) => {
	return executeGraphqlQuery({
		query: CartRemoveProductDocument,
		variables: { itemId },
		isMutation: true,
	});
};

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
