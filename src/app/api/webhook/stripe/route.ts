/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("	MiSSING KEY");
	}

	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("MISSING STRIPE_WEBHOOK_SECRET");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature") || "";

	if (!signature) {
		return new Response("No signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			event.data.object.metadata?.cartId;
		}
	}

	return new Response("ok", { status: 200 });
}
