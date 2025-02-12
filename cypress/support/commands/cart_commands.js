Cypress.Commands.add('addItemsToCart', item => {
    cy.get(`[data-test="add-to-cart-sauce-labs-${item}"]`).click()
})

Cypress.Commands.add('countCartBadgeProducts', () => {
    cy.get('[data-test="shopping-cart-badge"]')
      .then($cartBadge => {
        return parseInt($cartBadge.text())
      })
  })

Cypress.Commands.add('accessCart', () => {
    cy.get('.shopping_cart_link').scrollIntoView().should('be.visible')
    cy.get('.shopping_cart_link').click()
})

Cypress.Commands.add('countCartProducts', () => {
    cy.get('.cart_item_label')
    .then($cartItems => {
     return $cartItems.length
   })
})

Cypress.Commands.add('proceedToCheckout', () => {
    cy.get('[data-test="checkout"]').click()
})

Cypress.Commands.add('removeItemsToCart', item => {
  cy.get(`[data-test="remove-sauce-labs-${item}"]`).click()
})