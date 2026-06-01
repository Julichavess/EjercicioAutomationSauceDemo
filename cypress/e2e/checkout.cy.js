describe('Checkout - Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    })

    it('Checkout con datos validos', () =>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '1')

        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible').click()
        cy.url().should('include','/cart.html')

        cy.get('[data-test="checkout"]').click()
        cy.url().should('include','/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('juan')
        cy.get('[data-test="lastName"]').type('perez')
        cy.get('[data-test="postalCode"]').type('5000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
    })

    it('Checkout SIN COMPLETAR datos validos', () =>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '1')

        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible').click()
        cy.url().should('include','/cart.html')

        cy.get('[data-test="checkout"]').click()
        cy.url().should('include','/checkout-step-one.html')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain','Error: First Name is required')
    })
})