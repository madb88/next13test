import { redirect } from "next/navigation";
import { formatMoney } from "../utils";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveButton } from "./RemoveButton";
import { handlePaymentAction } from "./actions";
import { getCartFromCookies } from "@/api/cart";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-10">
			<table className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
					</tr>
					<tr className="">
						<th>Quantity </th>
					</tr>
					<tr>
						<th>Price</th>
					</tr>
					<tr>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.id}>
									<td>{item.product.name}</td>
									<td className="px-4 text-center">
										<IncrementProductQuantity
											quantity={item.quantity}
											itemId={item.id}
										/>
									</td>
									<td>{formatMoney(item.product.price / 100)}</td>
									<td>
										<RemoveButton itemId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>
			<form action={handlePaymentAction}>
				<button className="mt-4 w-full max-w-xs rounded-md border bg-slate-950 py-2 text-white shadow-sm transition-colors hover:bg-slate-800">
					Pay
				</button>
			</form>
		</div>
	);
}
