/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
      reheat
      id
      createdAt
      updatedAt
      productPictureId
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
      reheat
      id
      createdAt
      updatedAt
      productPictureId
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
      reheat
      id
      createdAt
      updatedAt
      productPictureId
    }
  }
`;
export const onCreateAvailability = /* GraphQL */ `
  subscription OnCreateAvailability {
    onCreateAvailability {
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
export const onUpdateAvailability = /* GraphQL */ `
  subscription OnUpdateAvailability {
    onUpdateAvailability {
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
export const onDeleteAvailability = /* GraphQL */ `
  subscription OnDeleteAvailability {
    onDeleteAvailability {
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
export const onCreateRange = /* GraphQL */ `
  subscription OnCreateRange {
    onCreateRange {
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRange = /* GraphQL */ `
  subscription OnUpdateRange {
    onUpdateRange {
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRange = /* GraphQL */ `
  subscription OnDeleteRange {
    onDeleteRange {
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
        reheat
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
        reheat
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
        reheat
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
export const onCreateBill = /* GraphQL */ `
  subscription OnCreateBill {
    onCreateBill {
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
      email
      deliveryDate
      discountPercentage
      totalAmount
      createdAt
      updatedAt
      billDeliveryId
      billClientId
      billAddressId
      billPaymentOptionId
    }
  }
`;
export const onUpdateBill = /* GraphQL */ `
  subscription OnUpdateBill {
    onUpdateBill {
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
      email
      deliveryDate
      discountPercentage
      totalAmount
      createdAt
      updatedAt
      billDeliveryId
      billClientId
      billAddressId
      billPaymentOptionId
    }
  }
`;
export const onDeleteBill = /* GraphQL */ `
  subscription OnDeleteBill {
    onDeleteBill {
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
      email
      deliveryDate
      discountPercentage
      totalAmount
      createdAt
      updatedAt
      billDeliveryId
      billClientId
      billAddressId
      billPaymentOptionId
    }
  }
`;
export const onCreateDelivery = /* GraphQL */ `
  subscription OnCreateDelivery {
    onCreateDelivery {
      id
      date
      time
      scheduleId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDelivery = /* GraphQL */ `
  subscription OnUpdateDelivery {
    onUpdateDelivery {
      id
      date
      time
      scheduleId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDelivery = /* GraphQL */ `
  subscription OnDeleteDelivery {
    onDeleteDelivery {
      id
      date
      time
      scheduleId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
      id
      name
      phoneNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
      id
      name
      phoneNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
      id
      name
      phoneNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreatePaymentOption = /* GraphQL */ `
  subscription OnCreatePaymentOption {
    onCreatePaymentOption {
      id
      option
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePaymentOption = /* GraphQL */ `
  subscription OnUpdatePaymentOption {
    onUpdatePaymentOption {
      id
      option
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePaymentOption = /* GraphQL */ `
  subscription OnDeletePaymentOption {
    onDeletePaymentOption {
      id
      option
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig {
    onCreateConfig {
      id
      shippingFee
      phoneNumber
      gcash
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig {
    onUpdateConfig {
      id
      shippingFee
      phoneNumber
      gcash
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig {
    onDeleteConfig {
      id
      shippingFee
      phoneNumber
      gcash
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDiscountCode = /* GraphQL */ `
  subscription OnCreateDiscountCode {
    onCreateDiscountCode {
      id
      expiration
      percentage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDiscountCode = /* GraphQL */ `
  subscription OnUpdateDiscountCode {
    onUpdateDiscountCode {
      id
      expiration
      percentage
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDiscountCode = /* GraphQL */ `
  subscription OnDeleteDiscountCode {
    onDeleteDiscountCode {
      id
      expiration
      percentage
      createdAt
      updatedAt
    }
  }
`;
