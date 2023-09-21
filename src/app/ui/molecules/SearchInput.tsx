"use client";
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const queryParams = {
			search: search,
		};

		const queryString = new URLSearchParams(queryParams).toString();
		if (search) {
			router.push(`/products?${queryString}`);
		} else {
			router.push(`/products`);
		}
	};
	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					id="searchInput"
					type="text"
					placeholder="Search"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>
			</form>
		</>
	);
};
