"use client";
import {
	Suspense,
	experimental_useOptimistic as useOptimistic,
} from "react";
import { Loader } from "lucide-react";
import { Reviews } from "./Reviews";
import { addReview } from "@/app/product/actions";

export type ReviewProps = {
	headline: string;
	content: string;
	rating: number;
	name: string;
	email: string;
	id?: string;
};

type ReviewsFormPropst = {
	productId: string;
	reviews: ReviewProps[];
};

export const ReviewsForm = ({
	productId,
	reviews,
}: ReviewsFormPropst) => {
	const [optimisticReviews, setOptimisticReviews] =
		useOptimistic<ReviewProps[]>(reviews);

	return (
		<div className="mb-10 mt-2 flex !max-w-5xl flex-col gap-3 ">
			<div>
				<p>Reviews</p>
				<Suspense fallback={<Loader />}>
					<Reviews reviews={optimisticReviews} />
				</Suspense>
			</div>
			<h1>Add review</h1>
			<form
				className="flex flex-col gap-5"
				data-testid="add-review-form"
			>
				<div className="flex gap-2">
					<input
						type="text"
						name="name"
						className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						placeholder="Your name"
					/>
					<input
						type="email"
						name="email"
						className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
						placeholder="Your email"
					/>
				</div>
				<input
					type="text"
					name="headline"
					className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					placeholder="Review Title"
				/>
				<textarea
					name="content"
					className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					placeholder="Review Content"
				/>
				<input
					type="number"
					name="rating"
					className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
				/>
				<button
					formAction={async (data: FormData) => {
						const newReview = {
							name: data.get("name") as string,
							headline: data.get("headline") as string,
							content: data.get("content") as string,
							rating: parseInt(data.get("rating") as string),
							email: data.get("email") as string,
						};
						setOptimisticReviews([...optimisticReviews, newReview]);
						await addReview(
							newReview.name,
							newReview.headline,
							newReview.content,
							newReview.rating,
							productId,
							newReview.email,
						);
					}}
					className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
				>
					Send
				</button>
			</form>
		</div>
	);
};
