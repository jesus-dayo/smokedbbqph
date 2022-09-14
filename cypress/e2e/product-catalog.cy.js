import mockProducts from '../fixtures/products/products.json';

describe('Product Catalog', () => {
  it('should display products and checkout', () => {
    cy.visit('/');
    cy.fixture('products/products.json').as('productResponse');
    cy.intercept('_next/data/development/order.json', (req) => {
      delete req.headers['if-none-match'];
      return req.continue((res) => {
        res.body.pageProps.products = [...mockProducts.products];
      });
    });
    cy.contains('Order Now').click();
    cy.wait(2000);
    cy.url().should('include', '/order');
    cy.get(`[data-cy='test-checkout-id']`).should('not.exist');
    mockProducts.products.forEach((product) => {
      cy.contains(product.name).should('be.visible');
      cy.get(`[data-cy='test-${product.id}-quantity-input-id']`).eq(0);
    });
    cy.wrap(mockProducts.products[0].id).as('firstProductId');
    cy.wrap(mockProducts.products[1].id).as('secondProductId');

    cy.get('@firstProductId').then((id) => {
      cy.get(`[data-cy='test-${id}-quantity-plus-id']`).click();
      cy.get(`[data-cy='test-${id}-quantity-input-id']`).should(
        'contain.value',
        1
      );
      cy.get(`[data-cy='test-${id}-quantity-minus-id']`).click();
      cy.get(`[data-cy='test-${id}-quantity-input-id']`).should(
        'contain.value',
        0
      );
      cy.get(`[data-cy='test-checkout-id']`).should('not.exist');
    });
    cy.get('@secondProductId').then((id) => {
      cy.get(`[data-cy='test-${id}-quantity-plus-id']`).click();
      cy.get(`[data-cy='test-${id}-quantity-input-id']`).should(
        'contain.value',
        1
      );
      cy.get(`[data-cy='test-checkout-id']`).should('be.visible');
    });
  });
});
