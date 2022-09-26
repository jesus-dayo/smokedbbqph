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
          availabilityRangeId
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
      range {
        start
        end
        id
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
      availabilityRangeId
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
        range {
          start
          end
          id
          createdAt
          updatedAt
        }
        quantity
        createdAt
        updatedAt
        availabilityRangeId
      }
      nextToken
    }
  }
`;
export const getRange = /* GraphQL */ `
  query GetRange($id: ID!) {
    getRange(id: $id) {
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const listRanges = /* GraphQL */ `
  query ListRanges(
    $filter: ModelRangeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRanges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        start
        end
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
export const getBill = /* GraphQL */ `
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
          createdAt
          updatedAt
          billOrdersId
        }
        nextToken
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
      createdAt
      updatedAt
      billDeliveryId
      billClientId
      billAddressId
    }
  }
`;
export const listBills = /* GraphQL */ `
  query ListBills(
    $filter: ModelBillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orders {
          nextToken
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
        createdAt
        updatedAt
        billDeliveryId
        billClientId
        billAddressId
      }
      nextToken
    }
  }
`;
export const getDelivery = /* GraphQL */ `
  query GetDelivery($id: ID!) {
    getDelivery(id: $id) {
      id
      date
      time
      createdAt
      updatedAt
    }
  }
`;
export const listDeliveries = /* GraphQL */ `
  query ListDeliveries(
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      label
      quantity
      description
      price
      imgSrc
      createdAt
      updatedAt
      billOrdersId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        quantity
        description
        price
        imgSrc
        createdAt
        updatedAt
        billOrdersId
      }
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      phoneNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      houseNo
      street
      barangay
      city
      postalCode
      createdAt
      updatedAt
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        houseNo
        street
        barangay
        city
        postalCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
      id
      shippingFee
      phoneNumber
      gcash
      createdAt
      updatedAt
    }
  }
`;
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        shippingFee
        phoneNumber
        gcash
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
