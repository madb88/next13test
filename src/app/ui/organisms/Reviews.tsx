import { getReviewsByProduct } from "@/api/reviews";
import { type ProductFragmentFragment } from "@/gql/graphql";

export const Reviews = async ({
	product,
}: {
	product: ProductFragmentFragment;
}) => {
	const reviews = await getReviewsByProduct(product);
	if (!reviews) {
		return <p>No reviews</p>;
	}
	return (
		<>
			<div className="roudned-xl flex flex-col gap-4">
				{reviews.map((review) => {
					return (
						<div
							key={review.id}
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
