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
		<nav
			aria-label="pagination"
			className="mt-auto flex items-center justify-center"
		>
			<ul className="-mt-px flex gap-2">
				{Array.from({ length: totalPageCount }).map((_, index) => {
					return (
						<li key={index}>
							<ActiveLink
								key={index}
								href={`${link}${index + 1}` as Route}
							>
								<span>{index + 1}</span>
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
