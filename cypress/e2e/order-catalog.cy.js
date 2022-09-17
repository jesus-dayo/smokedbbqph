import { getTotalQuantity } from '../../utils';
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
    cy.quantity({ name: mockProducts.products[3].name }).should(
      'contain.text',
      'Not Available'
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
    cy.clickCategory({
      products: mockProducts.products,
      category: 'recommended',
    });
    mockProducts.products.forEach((product) => {
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
    });

    const recommendedProducts = mockProducts.products.filter(
      (product) => product.isRecommended
    );
    const availQuantity = recommendedProducts[0].availability.items[0].quantity;
    cy.inputQuantityVal({ name: mockProducts.products[0].name }).then((val) => {
      if (val < availQuantity) {
        for (let count = 0; count <= availQuantity + 1; count++) {
          console.log('adding quantity', count, availQuantity - 1);
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
});
