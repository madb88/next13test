/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "query CartGetOrderById($orderId: ID!) {\n  order(where: {id: $orderId}) {\n    orderItems {\n      quantity\n      id\n      product {\n        name\n      }\n    }\n  }\n}": types.CartGetOrderByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n      description\n      images {\n        id\n        url\n      }\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetItemQuantityDocument,
    "mutation UpdateProduct($orderId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $orderId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.UpdateProductDocument,
    "query ColorsGetList($id: ID!) {\n  productColorVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n}": types.ColorsGetListDocument,
    "fragment ProductFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 4) {\n    url\n  }\n  price\n  rating\n}": types.ProductFragmentFragmentDoc,
    "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductFragment\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  rating\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetByCategoryName($categoryName: String!, $first: Int, $skip: Int) {\n  products(\n    first: $first\n    skip: $skip\n    where: {categories_some: {name: $categoryName}}\n  ) {\n    ...ProductListItemFragment\n  }\n  productsConnection(where: {categories_some: {name: $categoryName}}) {\n    aggregate {\n      count\n    }\n    pageInfo {\n      pageSize\n    }\n  }\n}": types.ProductsGetByCategoryNameDocument,
    "query ProductsGetByCollectionName($collectionName: String!) {\n  collections(where: {name_contains: $collectionName}) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCollectionNameDocument,
    "query ProductsGetList($first: Int, $skip: Int, $orderBy: ProductOrderByInput) {\n  products(first: $first, skip: $skip, orderBy: $orderBy) {\n    ...ProductListItemFragment\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsSearchByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    id\n    name\n    categories(first: 1) {\n      name\n    }\n    images(first: 4) {\n      url\n    }\n    price\n  }\n}": types.ProductsSearchByNameDocument,
    "mutation ReviewCreate($headline: String!, $name: String!, $content: String!, $rating: Int!, $productId: ID!, $email: String!) {\n  createReview(\n    data: {headline: $headline, name: $name, content: $content, rating: $rating, product: {connect: {id: $productId}}, email: $email}\n  ) {\n    headline\n    name\n    content\n    rating\n    email\n    id\n  }\n}": types.ReviewCreateDocument,
    "fragment ReviewFragment on Review {\n  headline\n  name\n  content\n  rating\n  email\n}": types.ReviewFragmentFragmentDoc,
    "query ReviewsForProduct($product: ProductWhereInput) {\n  reviews(where: {product: $product}, last: 3, stage: DRAFT) {\n    headline\n    id\n    content\n    rating\n    name\n    email\n  }\n}": types.ReviewsForProductDocument,
    "query SizesGetList($id: ID!) {\n  productSizeVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n}": types.SizesGetListDocument,
    "query getCategories {\n  categories {\n    id\n    name\n  }\n}": types.GetCategoriesDocument,
    "query getCollections {\n  collections {\n    id\n    name\n  }\n}": types.GetCollectionsDocument,
    "query getColorVariants {\n  productColorVariants {\n    name\n  }\n}": types.GetColorVariantsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetOrderById($orderId: ID!) {\n  order(where: {id: $orderId}) {\n    orderItems {\n      quantity\n      id\n      product {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetOrderByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n      description\n      images {\n        id\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetItemQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateProduct($orderId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $orderId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').UpdateProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ColorsGetList($id: ID!) {\n  productColorVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n}"): typeof import('./graphql').ColorsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 4) {\n    url\n  }\n  price\n  rating\n}"): typeof import('./graphql').ProductFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductFragment\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  rating\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategoryName($categoryName: String!, $first: Int, $skip: Int) {\n  products(\n    first: $first\n    skip: $skip\n    where: {categories_some: {name: $categoryName}}\n  ) {\n    ...ProductListItemFragment\n  }\n  productsConnection(where: {categories_some: {name: $categoryName}}) {\n    aggregate {\n      count\n    }\n    pageInfo {\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionName($collectionName: String!) {\n  collections(where: {name_contains: $collectionName}) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int, $orderBy: ProductOrderByInput) {\n  products(first: $first, skip: $skip, orderBy: $orderBy) {\n    ...ProductListItemFragment\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    id\n    name\n    categories(first: 1) {\n      name\n    }\n    images(first: 4) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsSearchByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($headline: String!, $name: String!, $content: String!, $rating: Int!, $productId: ID!, $email: String!) {\n  createReview(\n    data: {headline: $headline, name: $name, content: $content, rating: $rating, product: {connect: {id: $productId}}, email: $email}\n  ) {\n    headline\n    name\n    content\n    rating\n    email\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewFragment on Review {\n  headline\n  name\n  content\n  rating\n  email\n}"): typeof import('./graphql').ReviewFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsForProduct($product: ProductWhereInput) {\n  reviews(where: {product: $product}, last: 3, stage: DRAFT) {\n    headline\n    id\n    content\n    rating\n    name\n    email\n  }\n}"): typeof import('./graphql').ReviewsForProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SizesGetList($id: ID!) {\n  productSizeVariants(where: {product: {id: $id}}) {\n    id\n    name\n  }\n}"): typeof import('./graphql').SizesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCategories {\n  categories {\n    id\n    name\n  }\n}"): typeof import('./graphql').GetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCollections {\n  collections {\n    id\n    name\n  }\n}"): typeof import('./graphql').GetCollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getColorVariants {\n  productColorVariants {\n    name\n  }\n}"): typeof import('./graphql').GetColorVariantsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
