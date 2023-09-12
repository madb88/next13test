import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

type PaginationProps = {
	count: number;
	pageSize: number;
};

export const Pagination = ({ count, pageSize }: PaginationProps) => {
	const totalPageCount = Math.ceil(count / pageSize);

	return (
		<div>
			{Array.from({ length: totalPageCount }).map((_, index) => {
				return (
					<ActiveLink
						key={index}
						href={`/products/${index + 1}` as Route}
					>
						{index + 1}
					</ActiveLink>
				);
			})}
		</div>
	);
};
