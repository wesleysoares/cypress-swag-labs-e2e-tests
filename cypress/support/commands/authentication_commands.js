Cypress.Commands.add('loginSuccessfully', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="title"]').contains('Products')

})

Cypress.Commands.add('logoutSuccessfully', () => {
    cy.get('#react-burger-menu-btn').click()

    cy.get('[data-test="logout-sidebar-link"]').click()

    cy.get('[data-test="login-button"]').isVisible
})