// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('orderNow', () => {
  cy.contains('Order Now').click();
  cy.wait(2000);
  cy.url().should('include', '/order');
});

Cypress.Commands.add('checkout', () => {
  return cy.get(`[data-cy='test-checkout-id']`);
});

Cypress.Commands.add('checkoutNow', () => {
  cy.get(`[data-cy='test-checkout-id']`).click();
  cy.wait(2000);
  cy.url().should('include', '/checkout');
});

Cypress.Commands.add('quantity', ({ name }) => {
  return cy.get(`[data-cy='test-${name}-quantity-id']`);
});

Cypress.Commands.add('inputQuantity', ({ name }) => {
  return cy.get(`[data-cy='test-${name}-quantity-input-id']`);
});

Cypress.Commands.add('availQuantity', ({ name }) => {
  return cy.get(`[data-cy='test-${name}-quantity-avail-id']`);
});

Cypress.Commands.add('inputQuantityVal', ({ name }) => {
  return cy
    .inputQuantity({ name })
    .invoke('val')
    .then((val) => {
      return Number(val);
    });
});

Cypress.Commands.add('addQuantity', ({ name, availQuantity }) => {
  cy.inputQuantity({ name })
    .invoke('val')
    .then((val) => {
      cy.get(`[data-cy='test-${name}-quantity-plus-id']`).click();
      cy.inputQuantity({ name })
        .invoke('val')
        .should((val2) => {
          if (val2 >= availQuantity) {
            expect(Number(val2)).eq(Number(availQuantity));
          } else {
            expect(Number(val2)).eq(Number(val) + 1);
          }
        });
    });
});

Cypress.Commands.add('minusQuantity', ({ name }) => {
  cy.inputQuantity({ name })
    .invoke('val')
    .then((val) => {
      cy.get(`[data-cy='test-${name}-quantity-minus-id']`).click();
      cy.inputQuantity({ name })
        .invoke('val')
        .should((val2) => {
          if (val > 0) {
            expect(Number(val2)).eq(Number(val) - 1);
          } else {
            expect(Number(val2)).eq(0);
          }
        });
    });
});

Cypress.Commands.add('clickCategory', ({ products, category }) => {
  cy.get(`[data-cy='test-category-${category}-id']`).click();
  if (category === 'recommended') {
    products.forEach((product) => {
      if (product.isRecommended) {
        cy.contains(product.name).should('be.visible');
      } else {
        cy.contains(product.name).should('not.exist');
      }
    });
  } else {
    products.forEach((product) => {
      if (product.category === category) {
        cy.contains(product.name).should('be.visible');
      } else {
        cy.contains(product.name).should('not.exist');
      }
    });
  }
});

Cypress.Commands.add('fillPersonalDetails', () => {
  cy.get(`[data-cy='test-name-input']`).focus();
  cy.get(`[data-cy='test-name-input']`).blur();
  cy.contains('name is a required field').should('exist');
  cy.get(`[data-cy='test-name-input']`).type('Johnny Depp');
  cy.contains('name is a required field').should('not.exist');

  cy.get(`[data-cy='test-phone-input']`).focus();
  cy.get(`[data-cy='test-phone-input']`).blur();
  cy.contains('phone is a required field').should('exist');
  cy.get(`[data-cy='test-phone-input']`).type('63 9192345678');
  cy.contains('phone is a required field').should('not.exist');

  cy.get(`[data-cy='test-email-input']`).focus();
  cy.get(`[data-cy='test-email-input']`).blur();
  cy.contains('email is a required field').should('exist');
  cy.get(`[data-cy='test-email-input']`).type('johnny.depp@email.com');
  cy.contains('email is a required field').should('not.exist');
});

Cypress.Commands.add('fillAddress', () => {
  cy.get(`[data-cy='test-houseNo-input']`).focus();
  cy.get(`[data-cy='test-houseNo-input']`).blur();
  cy.contains('house number is a required field').should('exist');
  cy.get(`[data-cy='test-houseNo-input']`).type('B1 L2 Manila');
  cy.contains('house number is a required field').should('not.exist');

  cy.get(`[data-cy='test-streetAddress-input']`).focus();
  cy.get(`[data-cy='test-streetAddress-input']`).blur();
  cy.contains('street address is a required field').should('exist');
  cy.get(`[data-cy='test-streetAddress-input']`).type('iris st');
  cy.contains('street address is a required field').should('not.exist');

  cy.get(`[data-cy='test-city-input']`).focus();
  cy.get(`[data-cy='test-city-input']`).blur();
  cy.contains('city is a required field').should('exist');
  cy.get(`[data-cy='test-city-input']`).type('Muntinlupa');
  cy.contains('city is a required field').should('not.exist');
});

Cypress.Commands.add('submitOrder', () => {
  cy.contains('Submit Order').should('exist');
  cy.contains('Submit Order').click();
  cy.wait(2000);
  cy.url().should('include', '/confirmation');
});
