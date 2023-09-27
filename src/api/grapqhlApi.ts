import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphqlQuery = async <TResult, TVariables>({
	query,
	variables,
	next,
	cache,
	isMutation,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
	isMutation?: boolean;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL)
		throw new Error("GRAPHQL_URL is not defined");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${
				isMutation
					? process.env.MUTATION_TOKEN
					: process.env.GRAPHQL_TOKEN
			}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
		next,
		cache,
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: Array<{ message: string }> }
		| { data: T; errors?: undefined };

	const graphqlResponse =
		(await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse);
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
