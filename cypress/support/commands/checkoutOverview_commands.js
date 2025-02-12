Cypress.Commands.add('validateTotalCheckout', () => {
    cy.get('[data-test="inventory-item-price"]').then($prices => {
        let subtotal = 0;

        $prices.each((index, price) => {
            subtotal += parseFloat(price.innerText.replace('$', ''));
        });

        cy.get('[data-test="tax-label"]').invoke('text').then(taxText => {
            const tax = parseFloat(taxText.replace('Tax: $', ''));

            cy.get('[data-test="total-label"]').invoke('text').then(totalText => {
                const total = parseFloat(totalText.replace('Total: $', ''));

                expect(total).to.eq(subtotal + tax);
            });
        });
    });   
})

Cypress.Commands.add('finishCheckout', () => {
    cy.get('[data-test="finish"]').click()
})