import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && (
						<ProductCoverImage
							src={product.images[0].url}
							alt={product.name}
						/>
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
