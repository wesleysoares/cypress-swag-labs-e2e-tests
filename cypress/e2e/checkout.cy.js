describe('Checkout - Swag Labs', () => {

     const products = [
         {name: 'backpack'},
         {name: 'bike-light'}
      ];
    
    beforeEach(() => {
        cy.visit('')
        cy.loginSuccessfully()
    })

    afterEach(() => {
         cy.logoutSuccessfully()
      })

    it('should complete a purchase successfully', () =>{
        cy.addItemsToCart(products[0].name)
        cy.addItemsToCart(products[1].name)

        cy.countCartBadgeProducts().should('be.equal', products.length)

        cy.accessCart()

        cy.countCartProducts().should('be.equal', products.length)

        cy.proceedToCheckout()

        cy.fillCustomerForm('Silvio', 'Santos', '09876123')

        cy.countCartBadgeProducts().should('be.equal', products.length)

        cy.validateTotalCheckout()

        cy.finishCheckout()

        cy.validateCheckoutComplete()

    });

    it('should complete a purchase successfully after removing a product from the cart', () => {
        cy.addItemsToCart(products[0].name)
        cy.addItemsToCart(products[1].name)

        cy.countCartBadgeProducts().should('be.equal', products.length)

        cy.accessCart()

        cy.countCartProducts().should('be.equal', products.length)

        cy.removeItemsToCart(products[1].name)

        cy.countCartProducts().should('be.equal', products.length - 1)

        cy.proceedToCheckout()

        cy.fillCustomerForm('Silvio', 'Santos', '09876123')

        cy.countCartBadgeProducts().should('be.equal', products.length -1)

        cy.validateTotalCheckout()

        cy.finishCheckout()

        cy.validateCheckoutComplete()
    });

    it('should attempt to complete the purchase without filling in customer details', () => {
        cy.addItemsToCart(products[0].name)
        cy.addItemsToCart(products[1].name)

        cy.countCartBadgeProducts().should('be.equal', products.length)

        cy.accessCart()

        cy.countCartProducts().should('be.equal', products.length)

        cy.removeItemsToCart(products[1].name)

        cy.countCartProducts().should('be.equal', products.length - 1)

        cy.proceedToCheckout()

        cy.continueToCheckout()

        cy.get('[data-test="error"]').contains('Error: First Name is required')
      });
      
});