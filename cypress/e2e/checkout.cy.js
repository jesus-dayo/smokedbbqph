import moment from 'moment';
import mockProducts from '../fixtures/products/products.json';

describe('Checkout', () => {
  beforeEach(() => {
    const now = new Date(2022, 6, 14);
    cy.clock(now, ['Date']);
  });
  it('should be able to submit', () => {
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
    cy.addQuantity({
      name: mockProducts.products[0].name,
      availQuantity: mockProducts.products[0].availability.items[0].quantity,
    });
    cy.checkout().should('exist');
    cy.checkout().checkoutNow();
    cy.fillPersonalDetails();
    cy.fillAddress();
    cy.submitOrder().then(() => {
      cy.contains('Home').click();
      cy.orderNow();
      cy.get(`[data-cy='test-avail-21 Aug 2022-id']`).click();
      cy.get(
        `[data-cy='test-${mockProducts.products[0].name}-quantity-avail-id']`
      ).should('have.text', '1 left');
    });
  });
  it('should be able to minus quantity in checkout page', () => {
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
    cy.addQuantity({
      name: mockProducts.products[0].name,
      availQuantity: mockProducts.products[0].availability.items[0].quantity,
    });
    cy.inputQuantityVal({ name: mockProducts.products[0].name }).should(
      'eq',
      1
    );
    cy.checkout().should('exist');
    cy.checkout().checkoutNow();
    cy.fillPersonalDetails();
    cy.fillAddress();
    cy.get(
      `[data-cy='test-${mockProducts.products[0].name}-quantity-minus-id']`
    ).click();
    cy.quantity({ name: mockProducts.products[0].name }).should('not.exist');
    cy.contains(
      'Nothing on the cart. Please return to order page to re-order.'
    ).should('exist');
    cy.contains('Submit Order').should('be.disabled');
  });
  it('should disabled submit order on validation errors', () => {
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
    cy.addQuantity({
      name: mockProducts.products[0].name,
      availQuantity: mockProducts.products[0].availability.items[0].quantity,
    });
    cy.inputQuantityVal({ name: mockProducts.products[0].name }).should(
      'eq',
      1
    );
    cy.checkout().should('exist');
    cy.checkout().checkoutNow();
    cy.fillPersonalDetails();
    cy.contains('Submit Order').should('be.disabled');
  });
});
