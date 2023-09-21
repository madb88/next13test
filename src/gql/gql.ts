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
    "fragment ProductFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 4) {\n    url\n  }\n  price\n  variants {\n    __typename\n  }\n}": types.ProductFragmentFragmentDoc,
    "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductFragment\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetByCategoryName($categoryName: String!, $limit: Int) {\n  categories(where: {name: $categoryName}) {\n    products(first: $limit) {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCategoryNameDocument,
    "query ProductsGetByCollectionName($collectionName: String!) {\n  collections(where: {name_contains: $collectionName}) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductsGetByCollectionNameDocument,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItemFragment\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsSearchByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    id\n    name\n    categories(first: 1) {\n      name\n    }\n    images(first: 4) {\n      url\n    }\n    price\n  }\n}": types.ProductsSearchByNameDocument,
    "query getCategories {\n  categories {\n    id\n    name\n  }\n}": types.GetCategoriesDocument,
    "query getCollections {\n  collections {\n    id\n    name\n  }\n}": types.GetCollectionsDocument,
    "query getColorVariants {\n  productColorVariants {\n    name\n  }\n}": types.GetColorVariantsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductFragment on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 4) {\n    url\n  }\n  price\n  variants {\n    __typename\n  }\n}"): typeof import('./graphql').ProductFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductFragment\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategoryName($categoryName: String!, $limit: Int) {\n  categories(where: {name: $categoryName}) {\n    products(first: $limit) {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionName($collectionName: String!) {\n  collections(where: {name_contains: $collectionName}) {\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItemFragment\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchByName($name: String!) {\n  products(where: {name_contains: $name}) {\n    id\n    name\n    categories(first: 1) {\n      name\n    }\n    images(first: 4) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsSearchByNameDocument;
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
