/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      name
      category
      description
      price
      originalPrice
      currency
      isRecommended
      availability {
        nextToken
      }
      picture {
        id
        web
        mobile
        createdAt
        updatedAt
      }
      isFrozen
      id
      createdAt
      updatedAt
      productPictureId
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
        name
        category
        description
        price
        originalPrice
        currency
        isRecommended
        isFrozen
        id
        createdAt
        updatedAt
        productPictureId
      }
      nextToken
    }
  }
`;
export const getAvailability = /* GraphQL */ `
  query GetAvailability($id: ID!) {
    getAvailability(id: $id) {
      date
      range {
        start
        end
        id
        createdAt
        updatedAt
      }
      quantity
      id
      createdAt
      updatedAt
      productAvailabilityId
      availabilityRangeId
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
        id
        createdAt
        updatedAt
        productAvailabilityId
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
      id
      web
      mobile
      appearsIn {
        name
        category
        description
        price
        originalPrice
        currency
        isRecommended
        isFrozen
        id
        createdAt
        updatedAt
        productPictureId
      }
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
        id
        web
        mobile
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
        nextToken
      }
      delivery {
        id
        date
        time
        scheduleId
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
      discountCode
      status
      shippingFee
      createdAt
      updatedAt
      billDeliveryId
      billClientId
      billAddressId
      billPaymentOptionId
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
        discountCode
        status
        shippingFee
        createdAt
        updatedAt
        billDeliveryId
        billClientId
        billAddressId
        billPaymentOptionId
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
      scheduleId
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
        scheduleId
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
      productId
      label
      quantity
      description
      price
      imgSrc
      isFrozen
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
        productId
        label
        quantity
        description
        price
        imgSrc
        isFrozen
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
export const getPaymentOption = /* GraphQL */ `
  query GetPaymentOption($id: ID!) {
    getPaymentOption(id: $id) {
      id
      option
      createdAt
      updatedAt
    }
  }
`;
export const listPaymentOptions = /* GraphQL */ `
  query ListPaymentOptions(
    $filter: ModelPaymentOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        option
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
export const getDiscountCode = /* GraphQL */ `
  query GetDiscountCode($id: ID!) {
    getDiscountCode(id: $id) {
      id
      expiration
      percentage
      createdAt
      updatedAt
    }
  }
`;
export const listDiscountCodes = /* GraphQL */ `
  query ListDiscountCodes(
    $filter: ModelDiscountCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscountCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        expiration
        percentage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
