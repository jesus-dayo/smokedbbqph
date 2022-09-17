/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($name: String!) {
    getProduct(name: $name) {
      name
      category
      description
      price
      currency
      isRecommended
      availabilityDate
      availability {
        items {
          date
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        web
        mobile
        appearsIn {
          name
          category
          description
          price
          currency
          isRecommended
          availabilityDate
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $name: String
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        category
        description
        price
        currency
        isRecommended
        availabilityDate
        availability {
          nextToken
        }
        picture {
          web
          mobile
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAvailability = /* GraphQL */ `
  query GetAvailability($date: ID!) {
    getAvailability(date: $date) {
      date
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const listAvailabilities = /* GraphQL */ `
  query ListAvailabilities(
    $date: ID
    $filter: ModelAvailabilityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAvailabilities(
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        date
        quantity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      web
      mobile
      appearsIn {
        name
        category
        description
        price
        currency
        isRecommended
        availabilityDate
        availability {
          nextToken
        }
        picture {
          web
          mobile
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        web
        mobile
        appearsIn {
          name
          category
          description
          price
          currency
          isRecommended
          availabilityDate
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
