/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.clock(Date.UTC(2021, 2, 2));
    cy.visit('localhost:1338');
    cy.get('.green').should('have.text', '2021-2-2');

    cy.clock(Date.UTC(2021, 4, 20));
    cy.reload();
    cy.get('.green').should('have.text', '2021-4-20');
  })
})
