import { isProductAvailableByDate } from '../../utils/util';
import mockProducts from '../fixtures/products/products.json';

describe('Order Catalog', () => {
  it('should be able to add/remove orders', () => {
    cy.visit('/');
    cy.fixture('products/products.json').as('productResponse');
    cy.intercept('_next/data/**/order.json', (req) => {
      delete req.headers['if-none-match'];
      return req.continue((res) => {
        res.body.pageProps.products = [...mockProducts.products];
      });
    });
    cy.orderNow();
    cy.checkout().should('not.exist');
    cy.clickCategory({
      products: mockProducts.products,
      category: 'recommended',
    });
    cy.get(`[data-cy='test-avail-21 Aug 2022-id']`).click();
    const notAvailProduct = mockProducts.products.find((product) => {
      const availProdByDate = product.availability.items.filter(
        (item) => item.date === '21 Aug 2022'
      );
      return (
        availProdByDate?.length === 0 || availProdByDate[0]?.quantity === 0
      );
    });
    cy.quantity({ name: notAvailProduct.name }).should(
      'contain.text',
      'Sold Out'
    );
    cy.addQuantity({
      name: mockProducts.products[0].name,
      availQuantity: mockProducts.products[0].availability.items[0].quantity,
    });
    cy.checkout().should('exist');
    cy.minusQuantity({ name: mockProducts.products[0].name });
    cy.checkout().should('not.exist');
    cy.addQuantity({
      name: mockProducts.products[1].name,
      availQuantity: mockProducts.products[1].availability.items[0].quantity,
    });
    cy.checkout().should('exist');
  });
  it('should filter category', () => {
    cy.visit('/');
    cy.fixture('products/products.json').as('productResponse');
    cy.intercept('_next/data/**/order.json', (req) => {
      delete req.headers['if-none-match'];
      return req.continue((res) => {
        res.body.pageProps.products = [...mockProducts.products];
      });
    });
    cy.orderNow();
    cy.checkout().should('not.exist');
    cy.clickCategory({ products: mockProducts.products, category: 'beef' });
    cy.clickCategory({ products: mockProducts.products, category: 'pork' });
  });

  it('should not allow negative in minus quantity', () => {
    cy.visit('/');
    cy.fixture('products/products.json').as('productResponse');
    cy.intercept('_next/data/**/order.json', (req) => {
      delete req.headers['if-none-match'];
      return req.continue((res) => {
        res.body.pageProps.products = [...mockProducts.products];
      });
    });
    cy.orderNow();
    cy.checkout().should('not.exist');
    cy.clickCategory({
      products: mockProducts.products,
      category: 'recommended',
    });
    cy.addQuantity({ name: mockProducts.products[0].name });
    cy.checkout().should('exist');
    cy.minusQuantity({ name: mockProducts.products[0].name });
    cy.inputQuantityVal({ name: mockProducts.products[0].name }).should(
      'eq',
      0
    );
    cy.checkout().should('not.exist');
    cy.minusQuantity({ name: mockProducts.products[0].name });
    cy.inputQuantityVal({ name: mockProducts.products[0].name }).should(
      'eq',
      0
    );
  });
  it('should follow quantity availability', () => {
    cy.visit('/');
    cy.fixture('products/products.json').as('productResponse');
    cy.intercept('_next/data/**/order.json', (req) => {
      delete req.headers['if-none-match'];
      return req.continue((res) => {
        res.body.pageProps.products = [...mockProducts.products];
      });
    });
    cy.orderNow();
    cy.checkout().should('not.exist');
    cy.get(`[data-cy='test-avail-21 Aug 2022-id']`).click();
    cy.clickCategory({
      products: mockProducts.products,
      category: 'recommended',
    });
    mockProducts.products.forEach((product) => {
      if (!isProductAvailableByDate(product, '21 Aug 2022')) {
        cy.quantity({ name: product.name }).should('contain.text', 'Sold Out');
      } else {
        if (product.isRecommended) {
          const availableQuantity = product.availability?.items[0].quantity;
          if (availableQuantity === 0) {
            cy.availQuantity({ name: product.name }).should(
              'not.have.text',
              `${availableQuantity} left`
            );
          } else {
            cy.availQuantity({ name: product.name }).should(
              'have.text',
              `${availableQuantity} left`
            );
          }
        }
      }
    });

    const recommendedProducts = mockProducts.products.filter(
      (product) => product.isRecommended
    );
    const availQuantity = recommendedProducts[0].availability.items[0].quantity;
    cy.inputQuantityVal({ name: mockProducts.products[0].name }).then((val) => {
      if (val < availQuantity) {
        for (let count = 0; count <= availQuantity + 1; count++) {
          cy.addQuantity({
            name: mockProducts.products[0].name,
            availQuantity,
          });
        }
      }
    });
    cy.contains('Max exceeded').should('have.exist');
    cy.inputQuantityVal({ name: mockProducts.products[0].name }).should(
      'eq',
      availQuantity
    );
  });
  it('should be able to choose schedule', () => {
    cy.visit('/');
    cy.fixture('products/products.json').as('productResponse');
    cy.intercept('_next/data/**/order.json', (req) => {
      delete req.headers['if-none-match'];
      return req.continue((res) => {
        res.body.pageProps.products = [...mockProducts.products];
      });
    });
    cy.orderNow();
    cy.get(`[data-cy='test-avail-21 Aug 2022-id']`).click();
    cy.quantity({ name: 'Blood Sausage' }).should('contain.text', 'Sold Out');
    cy.get(`[data-cy='test-avail-22 Aug 2022-id']`).click();
    cy.inputQuantityVal({ name: 'Blood Sausage' }).then((val) =>
      expect(val).eq(0)
    );
  });
  it('should alert user if item in cart not avail in date', () => {
    cy.visit('/');
    cy.fixture('products/products.json').as('productResponse');
    cy.intercept('_next/data/**/order.json', (req) => {
      delete req.headers['if-none-match'];
      return req.continue((res) => {
        res.body.pageProps.products = [...mockProducts.products];
      });
    });
    cy.orderNow();

    cy.get(`[data-cy='test-avail-22 Aug 2022-id']`).click();
    cy.inputQuantityVal({ name: 'Blood Sausage' }).then((val) =>
      expect(val).eq(0)
    );
    cy.addQuantity({ name: 'Blood Sausage', availQuantity: 10 });
    cy.inputQuantityVal({ name: 'Blood Sausage' }).then((val) =>
      expect(val).eq(1)
    );
    cy.get(`[data-cy='test-avail-21 Aug 2022-id']`).click();
    cy.contains('Blood Sausage is Sold Out on this date.');
    cy.quantity({ name: 'Blood Sausage' }).should('contain.text', 'Sold Out');
  });
});
