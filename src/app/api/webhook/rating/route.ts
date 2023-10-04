import { NextResponse, type NextRequest } from "next/server";
import { getReviewsByProduct } from "@/api/reviews";
import { updateProductReviewRating } from "@/api/products";

export type ReviewType = {
	data: {
		headline: string;
		name: string;
		content: string;
		rating: number;
		email: string;
		product: { id: string };
		id: string;
	};
};
// curl -X POST --data-binary '{"data": {"headling": "test", "name":"test","content":"asdsadsds","rating":"2","email":"test222@gmail.com","product":{"id":"ckdu4ch1s0h1s01580ksoy6m5"},"id":"tee"}}' localhost:3000/api/webhook/rating

export async function POST(request: NextRequest): Promise<Response> {
	const body = (await request.json()) as ReviewType;
	console.log(body);
	if (body && body.data && body.data.product.id) {
		let averageRating = 0;

		const { reviews, reviewsConnection } = await getReviewsByProduct(
			body.data.product,
		);

		const total = reviews.reduce((acc, edge) => {
			return acc + edge.rating;
		}, 0);

		console.log(total);
		console.log(reviewsConnection.aggregate.count);
		averageRating = Math.floor(
			total / reviewsConnection.aggregate.count,
		);

		console.log(averageRating);

		const averageRatingResponse = await updateProductReviewRating(
			body.data.product.id,
			averageRating,
		);
		console.log(averageRatingResponse);
		return NextResponse.json(
			{ message: `Status: ${averageRatingResponse?.id}` },
			{ status: 201 },
		);
	} else {
		return NextResponse.json({ message: `Error` }, { status: 400 });
	}
}
