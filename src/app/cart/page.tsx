import { redirect } from "next/navigation";
import { formatMoney } from "../utils";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
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
					<tr>Product</tr>
					<tr className="">Quantity</tr>
					<tr>Price</tr>
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
								</tr>
							),
					)}
				</tbody>
			</table>
		</div>
	);
}
