import { type ReviewProps } from "./ReviewsForm";

export const Reviews = async ({
	reviews,
}: {
	reviews: ReviewProps[];
}) => {
	if (!reviews) {
		return <p>No reviews</p>;
	}
	return (
		<>
			<div className="roudned-xl flex flex-col gap-4">
				{reviews.map((review) => {
					return (
						<div
							key={review.content + review.email + review.name}
							className="rounded-md bg-slate-300 p-5"
						>
							<p>Title: {review.headline}</p>
							<p>Content: {review.content}</p>
							<p>Raiting: {review.rating}</p>
							<p>Author: {review.name}</p>
							<p>Email: {review.email}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
