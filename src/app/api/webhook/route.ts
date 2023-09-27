import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const json: unknown = await request.json();
	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		json.productId;
		console.log(`Revalidateting ${json.productId}`);
		revalidatePath(`/product/${json.productId}`);
		revalidatePath(`/products`);
		return NextResponse.json({ message: "ok" }, { status: 200 });
	}

	return NextResponse.json(
		{ message: "INvalid body" },
		{ status: 400 },
	);
}
