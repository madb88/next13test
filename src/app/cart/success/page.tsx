import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		return redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.retrieve(
		searchParams.sessionId,
	);

	return (
		<div className="rounded-md bg-slate-300 p-4">
			<h1>Success</h1>
			<p>Thank you for your purchase!</p>
			<p>Status: {session.payment_status}</p>
			<p>Order ID: {session.id}</p>
		</div>
	);
}
