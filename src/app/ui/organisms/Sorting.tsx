"use client";

import { useRouter, usePathname } from "next/navigation";
import type { Route } from "next";

export const Sorting = () => {
	const router = useRouter();
	const pathName = usePathname();

	const handleChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const value = event.target.value;
		const queryParams = {
			sort: encodeURIComponent(value),
		};

		const queryString = new URLSearchParams(queryParams).toString();
		const sortPath = `${pathName}?${queryString}`;
		router.push(sortPath as Route);
	};

	return (
		<select onChange={handleChange}>
			<option selected disabled value="">
				Sort by price
			</option>
			<option data-testid="sort-by-price" value="price_ASC">
				Price ASC
			</option>
			<option data-testid="sort-by-price" value="price_DESC">
				Price DESC
			</option>
			<option data-testid="sort-by-rating" value="rating_ASC">
				Rating ASC
			</option>
			<option data-testid="sort-by-rating" value="rating_DESC">
				Rating DESC
			</option>
		</select>
	);
};
