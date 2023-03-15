export const listProductsWithAvailability = /* GraphQL */ `
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
        originalPrice
        price
        currency
        isRecommended
        isFrozen
        reheat
        availability {
          items {
            id
            date
            quantity
            range {
              id
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

export const listAvailabilityProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        availability {
          items {
            id
            date
            quantity
            range {
              id
              start
              end
            }
          }
        }
      }
      nextToken
    }
  }
`;

export const listProductPictures = /* GraphQL */ `
  query ListProductPictures(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        picture {
          web
          mobile
          id
        }
      }
      nextToken
    }
  }
`;

export const getBillWithAvail = /* GraphQL */ `
  query GetBill($id: ID!) {
    getBill(id: $id) {
      id
      discountCode
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
      shippingFee
    }
  }
`;

export const listBillsWithDelivery = /* GraphQL */ `
  query ListBills(
    $filter: ModelBillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        shippingFee
        email
        deliveryDate
      }
      nextToken
    }
  }
`;
