describe('Carrito - Sauce Demo', () => { 
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    })
    
    it('Agregar un producto al carrito', () =>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '1')
    })

    it('Agregar MULTIPLES productos al carrito', () =>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').contains('button', 'Add to cart').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').contains('button', 'Add to cart').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '3')
    })

    it('Eliminar producto desde la pagina carrito', () =>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').contains('button', 'Add to cart').click()
        
        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible').click()
        cy.url().should('include','/cart.html')

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '1')        
    })
})