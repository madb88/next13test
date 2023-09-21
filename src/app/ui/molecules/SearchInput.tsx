/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { type FormEvent, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/app/hooks";

export const SearchInput = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get("query");
	const router = useRouter();
	const [search, setSearch] = useState(query || "");

	const debounceSearch = useDebounce(search, 500);

	useEffect(() => {
		if (!debounceSearch) return;
		router.push(`/search?query=${debounceSearch}`);
	}, [debounceSearch, router]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const queryParams = {
			query: search,
		};

		const queryString = new URLSearchParams(queryParams).toString();
		if (search !== "") {
			router.push(`/search?${queryString}`);
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
