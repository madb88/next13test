import { ImageResponse } from "next/server";
import { getProductById } from "@/api/products";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 630,
};
export const alt = "Open Graph Image";

export default async function OpenGraphImage({
	params,
}: {
	params: { productId: string };
}) {
	{
		const product = await getProductById(params.productId);
		if (!product) return new ImageResponse(<div>NextJs</div>);

		console.log(product);
		return new ImageResponse(
			(
				<div
					style={{
						fontSize: 12,
						background: "white",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{product.images.map((image) => (
						<img
							key={image.url}
							width={320}
							height={320}
							alt={alt}
							src={image.url}
							className="h-full w-full object-cover object-center p-4 hover:scale-105"
						/>
					))}
					<p>Name: {product.name}</p>
					<p>Description: {product.description}</p>
					Categories:{" "}
					{product.categories.map((category) => (
						<div key={category.name}>{category.name}</div>
					))}
				</div>
			),
		);
	}
}
