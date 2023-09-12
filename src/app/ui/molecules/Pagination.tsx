import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

type PaginationProps = {
	count: number;
	pageSize: number;
	link: string;
};

export const Pagination = ({
	count,
	pageSize,
	link,
}: PaginationProps) => {
	const totalPageCount = Math.ceil(count / pageSize);

	return (
		<div aria-label="pagination">
			{Array.from({ length: totalPageCount }).map((_, index) => {
				return (
					<ActiveLink
						key={index}
						href={`${link}${index + 1}` as Route}
					>
						{index + 1}
					</ActiveLink>
				);
			})}
		</div>
	);
};
