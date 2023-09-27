import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(_request: NextRequest): Promise<Response> {
	return NextResponse.json("Hello World!");
}
