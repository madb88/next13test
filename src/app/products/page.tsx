import { redirect } from "next/navigation";
import "server-only";

export default async function ProductsPage() {
	redirect("/products/1");
}
