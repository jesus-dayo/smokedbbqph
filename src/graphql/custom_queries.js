export const listProductsWithAvailability = /* GraphQL */ `
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
          items {
            date
            quantity
            range {
              start
              end
            }
          }
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
