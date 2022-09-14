describe('Navigation', () => {
  it('should navigate to the order page', () => {
    cy.visit('/');
    cy.contains('Order Now').click();
    cy.url().should('include', '/order');
  });
});
