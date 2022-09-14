/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateAvailability = /* GraphQL */ `
  subscription OnCreateAvailability {
    onCreateAvailability {
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
export const onUpdateAvailability = /* GraphQL */ `
  subscription OnUpdateAvailability {
    onUpdateAvailability {
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
export const onDeleteAvailability = /* GraphQL */ `
  subscription OnDeleteAvailability {
    onDeleteAvailability {
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
