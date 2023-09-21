import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { SearchInput } from "../molecules/SearchInput";
import { getCategoriesList } from "@/api/categories";
import { getCollectionsList } from "@/api/collections";

export default async function Navigation({}) {
	const categories = await getCategoriesList();
	const collections = await getCollectionsList();

	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
			<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
				<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
					<div className="hidden flex-shrink-0 items-center lg:flex"></div>
					<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
						<li className="first:pl-4 last:pr-4 lg:px-0">
							<ActiveLink exact={true} href="/">
								Home
							</ActiveLink>
						</li>
						<li className="first:pl-4 last:pr-4 lg:px-0">
							<ActiveLink href={"/products"}>All</ActiveLink>
						</li>
						{collections.map((collection) => {
							return (
								<li
									key={collection.id}
									className="first:pl-4 last:pr-4 lg:px-0"
								>
									<ActiveLink
										href={`/collections/${collection.name}` as Route}
									>
										{collection.name}
									</ActiveLink>
								</li>
							);
						})}
						{categories.map((category) => {
							return (
								<li
									key={category.id}
									className="first:pl-4 last:pr-4 lg:px-0"
								>
									<ActiveLink
										href={`/categories/${category.name}` as Route}
									>
										{category.name}
									</ActiveLink>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">
					<div className="w-full max-w-lg lg:max-w-xs">
						<label htmlFor="searchInput" className="sr-only">
							Szukaj
						</label>
						<div className="relative">
							<div className=" absolute inset-y-0 left-0 flex items-center pl-3">
								<SearchInput />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
