type ProductCoverImageProps = { src: string; alt: string };

export const ProductCoverImage = ({
	src,
	alt,
}: ProductCoverImageProps) => {
	return (
		<div className="hover:bg-slate-10 aspect-square overflow-hidden rounded-md border bg-slate-50">
			<img
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 hover:scale-105"
			/>
		</div>
	);
};
