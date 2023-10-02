"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(quantity);
	return (
		<form>
			<button
				disabled={optimisticQuantity === 0}
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
				className="mr-2 h-8 w-8 border bg-slate-50"
			>
				-
			</button>
			<div data-testid="quantity">{optimisticQuantity}</div>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="ml-2 h-8 w-8 border bg-slate-50"
			>
				+
			</button>
		</form>
	);
};
