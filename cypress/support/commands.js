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

import { getTotalQuantity } from '../../utils';

Cypress.Commands.add('orderNow', () => {
  cy.contains('Order Now').click();
  cy.wait(2000);
  cy.url().should('include', '/order');
});

Cypress.Commands.add('checkout', () => {
  return cy.get(`[data-cy='test-checkout-id']`);
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
