describe('Authentication - Swag Labs', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('should log in successfully', () =>{     
        cy.loginSuccessfully()
    });

    it('should display an error message', () =>{
        cy.get('[data-test="login-button"]').click()

        cy.get('.error-message-container').should('contain', 'Epic sadface: Username is required')
    })

    it('should logout successfully', () => {
        cy.loginSuccessfully()        
        cy.logoutSuccessfully()
    })

});