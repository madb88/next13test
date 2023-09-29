export const ReviewsForm = () => {
	return (
		<div className="mb-10 mt-2 flex !max-w-5xl flex-col gap-3 ">
			<h1>Add review</h1>
			<form className="flex flex-col gap-5">
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

				<button className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300">
					Send
				</button>
			</form>
		</div>
	);
};
