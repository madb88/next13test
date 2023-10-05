import { currentUser } from "@clerk/nextjs";
import { executeGraphqlQuery } from "@/api/grapqhlApi";
import { GetOrdersByEmailDocument } from "@/gql/graphql";

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;
	if (!email) {
		return <div>No email...</div>;
	}

	const { orders } = await executeGraphqlQuery({
		query: GetOrdersByEmailDocument,
		variables: {
			email,
		},
	});

	return (
		<>
			<div>
				<h1>{user.firstName}&rsquo;s Orders</h1>

				{orders.length === 0 ? (
					<div>No orders found</div>
				) : (
					<ul>
						{orders.map((order) => (
							<li key={order.id}>
								<div>{order.id}</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}
