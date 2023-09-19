import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphqlQuery = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL)
		throw new Error("GRAPHQL_URL is not defined");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: Array<{ message: string }> }
		| { data: T; errors?: undefined };

	const graphqlResponse =
		(await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
