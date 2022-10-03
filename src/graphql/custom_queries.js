export const listProductsWithAvailability = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        category
        description
        price
        currency
        isRecommended
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

export const getBillWithAvail = /* GraphQL */ `
  query GetBill($id: ID!) {
    getBill(id: $id) {
      id
      orders {
        items {
          id
          label
          quantity
          description
          price
          imgSrc
          billOrdersId
        }
      }
      delivery {
        id
        date
        time
        createdAt
        updatedAt
      }
      client {
        id
        name
        phoneNumber
        email
        createdAt
        updatedAt
      }
      address {
        id
        houseNo
        street
        barangay
        city
        postalCode
        createdAt
        updatedAt
      }
      paymentOption {
        id
        option
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      billDeliveryId
      billClientId
      billAddressId
      billPaymentOptionId
    }
  }
`;
