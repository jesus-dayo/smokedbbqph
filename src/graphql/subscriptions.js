/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
export const onCreateBill = /* GraphQL */ `
  subscription OnCreateBill {
    onCreateBill {
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
export const onUpdateBill = /* GraphQL */ `
  subscription OnUpdateBill {
    onUpdateBill {
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
export const onDeleteBill = /* GraphQL */ `
  subscription OnDeleteBill {
    onDeleteBill {
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
export const onCreateDelivery = /* GraphQL */ `
  subscription OnCreateDelivery {
    onCreateDelivery {
      id
      date
      time
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
