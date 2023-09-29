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
		return new ImageResponse(<div>NextJs {product.name}</div>);
	}
}

// export default function OpenGraphImage({}: {}) {
// 	return new ImageResponse(<div>NextJs</div>);
// }
