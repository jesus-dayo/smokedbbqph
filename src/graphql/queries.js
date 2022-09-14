/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      category
      description
      price
      currency
      isRecommended
      availability {
        date
        quantity
        appearsIn {
          id
          name
          category
          description
          price
          currency
          isRecommended
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      picture {
        web
        mobile
        appearsIn {
          id
          name
          category
          description
          price
          currency
          isRecommended
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
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        description
        price
        currency
        isRecommended
        availability {
          date
          quantity
          id
          createdAt
          updatedAt
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
  query GetAvailability($id: ID!) {
    getAvailability(id: $id) {
      date
      quantity
      appearsIn {
        id
        name
        category
        description
        price
        currency
        isRecommended
        availability {
          date
          quantity
          id
          createdAt
          updatedAt
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
export const listAvailabilities = /* GraphQL */ `
  query ListAvailabilities(
    $filter: ModelAvailabilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvailabilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
        quantity
        appearsIn {
          id
          name
          category
          description
          price
          currency
          isRecommended
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
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      web
      mobile
      appearsIn {
        id
        name
        category
        description
        price
        currency
        isRecommended
        availability {
          date
          quantity
          id
          createdAt
          updatedAt
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
          id
          name
          category
          description
          price
          currency
          isRecommended
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
