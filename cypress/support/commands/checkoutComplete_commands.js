Cypress.Commands.add('validateCheckoutComplete', () =>{
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    cy.get('[data-test="complete-text"]').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})