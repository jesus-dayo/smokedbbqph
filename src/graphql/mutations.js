/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createAvailability = /* GraphQL */ `
  mutation CreateAvailability(
    $input: CreateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    createAvailability(input: $input, condition: $condition) {
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
export const updateAvailability = /* GraphQL */ `
  mutation UpdateAvailability(
    $input: UpdateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    updateAvailability(input: $input, condition: $condition) {
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
export const deleteAvailability = /* GraphQL */ `
  mutation DeleteAvailability(
    $input: DeleteAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    deleteAvailability(input: $input, condition: $condition) {
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
export const createRange = /* GraphQL */ `
  mutation CreateRange(
    $input: CreateRangeInput!
    $condition: ModelRangeConditionInput
  ) {
    createRange(input: $input, condition: $condition) {
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateRange = /* GraphQL */ `
  mutation UpdateRange(
    $input: UpdateRangeInput!
    $condition: ModelRangeConditionInput
  ) {
    updateRange(input: $input, condition: $condition) {
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteRange = /* GraphQL */ `
  mutation DeleteRange(
    $input: DeleteRangeInput!
    $condition: ModelRangeConditionInput
  ) {
    deleteRange(input: $input, condition: $condition) {
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
export const createBill = /* GraphQL */ `
  mutation CreateBill(
    $input: CreateBillInput!
    $condition: ModelBillConditionInput
  ) {
    createBill(input: $input, condition: $condition) {
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
export const updateBill = /* GraphQL */ `
  mutation UpdateBill(
    $input: UpdateBillInput!
    $condition: ModelBillConditionInput
  ) {
    updateBill(input: $input, condition: $condition) {
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
export const deleteBill = /* GraphQL */ `
  mutation DeleteBill(
    $input: DeleteBillInput!
    $condition: ModelBillConditionInput
  ) {
    deleteBill(input: $input, condition: $condition) {
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
export const createDelivery = /* GraphQL */ `
  mutation CreateDelivery(
    $input: CreateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    createDelivery(input: $input, condition: $condition) {
      id
      date
      time
      scheduleId
      createdAt
      updatedAt
    }
  }
`;
export const updateDelivery = /* GraphQL */ `
  mutation UpdateDelivery(
    $input: UpdateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    updateDelivery(input: $input, condition: $condition) {
      id
      date
      time
      scheduleId
      createdAt
      updatedAt
    }
  }
`;
export const deleteDelivery = /* GraphQL */ `
  mutation DeleteDelivery(
    $input: DeleteDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    deleteDelivery(input: $input, condition: $condition) {
      id
      date
      time
      scheduleId
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createPaymentOption = /* GraphQL */ `
  mutation CreatePaymentOption(
    $input: CreatePaymentOptionInput!
    $condition: ModelPaymentOptionConditionInput
  ) {
    createPaymentOption(input: $input, condition: $condition) {
      id
      option
      createdAt
      updatedAt
    }
  }
`;
export const updatePaymentOption = /* GraphQL */ `
  mutation UpdatePaymentOption(
    $input: UpdatePaymentOptionInput!
    $condition: ModelPaymentOptionConditionInput
  ) {
    updatePaymentOption(input: $input, condition: $condition) {
      id
      option
      createdAt
      updatedAt
    }
  }
`;
export const deletePaymentOption = /* GraphQL */ `
  mutation DeletePaymentOption(
    $input: DeletePaymentOptionInput!
    $condition: ModelPaymentOptionConditionInput
  ) {
    deletePaymentOption(input: $input, condition: $condition) {
      id
      option
      createdAt
      updatedAt
    }
  }
`;
export const createConfig = /* GraphQL */ `
  mutation CreateConfig(
    $input: CreateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    createConfig(input: $input, condition: $condition) {
      id
      shippingFee
      phoneNumber
      gcash
      createdAt
      updatedAt
    }
  }
`;
export const updateConfig = /* GraphQL */ `
  mutation UpdateConfig(
    $input: UpdateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    updateConfig(input: $input, condition: $condition) {
      id
      shippingFee
      phoneNumber
      gcash
      createdAt
      updatedAt
    }
  }
`;
export const deleteConfig = /* GraphQL */ `
  mutation DeleteConfig(
    $input: DeleteConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    deleteConfig(input: $input, condition: $condition) {
      id
      shippingFee
      phoneNumber
      gcash
      createdAt
      updatedAt
    }
  }
`;
export const createDiscountCode = /* GraphQL */ `
  mutation CreateDiscountCode(
    $input: CreateDiscountCodeInput!
    $condition: ModelDiscountCodeConditionInput
  ) {
    createDiscountCode(input: $input, condition: $condition) {
      id
      expiration
      percentage
      createdAt
      updatedAt
    }
  }
`;
export const updateDiscountCode = /* GraphQL */ `
  mutation UpdateDiscountCode(
    $input: UpdateDiscountCodeInput!
    $condition: ModelDiscountCodeConditionInput
  ) {
    updateDiscountCode(input: $input, condition: $condition) {
      id
      expiration
      percentage
      createdAt
      updatedAt
    }
  }
`;
export const deleteDiscountCode = /* GraphQL */ `
  mutation DeleteDiscountCode(
    $input: DeleteDiscountCodeInput!
    $condition: ModelDiscountCodeConditionInput
  ) {
    deleteDiscountCode(input: $input, condition: $condition) {
      id
      expiration
      percentage
      createdAt
      updatedAt
    }
  }
`;
