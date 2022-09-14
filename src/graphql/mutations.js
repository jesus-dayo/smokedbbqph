/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createAvailability = /* GraphQL */ `
  mutation CreateAvailability(
    $input: CreateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    createAvailability(input: $input, condition: $condition) {
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
export const updateAvailability = /* GraphQL */ `
  mutation UpdateAvailability(
    $input: UpdateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    updateAvailability(input: $input, condition: $condition) {
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
export const deleteAvailability = /* GraphQL */ `
  mutation DeleteAvailability(
    $input: DeleteAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    deleteAvailability(input: $input, condition: $condition) {
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
