import AddItem from "../support/pageObject/addItem"
import Search from "../support/pageObject/search"
let addItem = new AddItem(),
    search = new Search()    

/// <reference types="Cypress" />

describe('Product page', () => {
   
    beforeEach(() => {
        cy.visit('/')
    })
  
    it.skip('Add max available quantity of the item', () => {
        addItem.addItem('Euphoria Men Intense Eau De Toilette Spray', 994913, true)
        cy.get('.alert').should('not.exist')
    })

    it.skip('Add max+1 available quantity of the item', () => {
        addItem.addItem('Euphoria Men Intense Eau De Toilette Spray', 994914, true)                                   //Don't know how should be. 994914 or 994915 in the shopping cart.
        cy.get('.alert').should('include.text', 'Products marked with *** are not available in the desired quantity or out of stock!')
    })

    it.skip('Add 0 items to the shopping cart', () => {
        addItem.addItem('Euphoria Men Intense Eau De Toilette Spray', 0, true)
        cy.get('.contentpanel').should('include.text', 'Your shopping cart is empty!')
    }) 

    it.skip('Add max quantity of the item according to the limit per order', () => {
        addItem.addItem('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie', 10, true)
        cy.get('.alert').should('not.exist')
    })

    it.skip('Add max+1 quantity of the item according to the limit per order', () => {
        addItem.addItem('Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie', 11, true)      //Don't know how should be. 10 or 11 in the shopping cart.
        cy.get('.alert').should('include.text', "Allowed product's quantity exceeds. Quantity was set to maximum")
    })

    it.skip('Add min quantity of the item according to the limit per order', () => {
        addItem.addItem('Benefit Bella Bamba', 2, true)
        cy.get('.alert').should('not.exist')
    })

    it.skip('Add min-1 quantity of the item according to the limit per order', () => {                              //Don't know how should be. 1 or 2 in the shopping cart.
        addItem.addItem('Benefit Bella Bamba', 1, true)
        cy.get('.alert').should('include.text', "Allowed product's quantity is below minimum required. Quantity was set to minimum amount.")
    }) 

    it.skip("Check that an item with Free Shipping bonus doesn't require price for shipping", () => {
        addItem.addItem('Ruby Shoo Womens Jada T-Bar', 1, true)
        cy.get('#totals_table .bold').eq(3).should('have.text', '$0.00')
    })

    it.skip("Check passing to the product page from Latest Products section", () => {
        search.findItemByName('Skinsheen Bronzer Stick')
        cy.get('.bgnone').should('have.text', 'Skinsheen Bronzer Stick')
        cy.get('.productname').contains('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15').click()
        cy.get('.bgnone').should('have.text', 'Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15')
    })

    it.skip("Check passing to  the product page from Related Products tab", () => {
        search.findItemByName('New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals')
        cy.get('.bgnone').should('have.text', 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals')
        cy.get('#myTab > *').eq(3).click()
        cy.get('.productname').contains('Fiorella Purple Peep Toes').click()
        cy.get('.bgnone').should('have.text', 'Fiorella Purple Peep Toes')
    })

    it.skip('Check that the image of the product zooms in when mouse hovers over the image', () => {
        search.findItemByName('Acqua Di Gio Pour Homme')
        cy.get('.easyzoom-flyout').should('not.exist')
        cy.get('.local_image').eq(0).trigger('mouseover')
        cy.get('.easyzoom-flyout').should('to.exist')
    })

    it.skip('Check that the image changes when user clicks on another image', () => {
        search.findItemByName('Acqua Di Gio Pour Homme')
        cy.wait(500)
        cy.get('[src$="100016-380x380.jpg"]').should('not.be.exist')
        cy.get('[src$="100014-380x380.jpg"]').should('be.visible')
        cy.get('[src$="100016-45x45.jpg"]').click({force: true})
        cy.get('[src$="100016-380x380.jpg"]').should('be.visible')
        cy.get('[src$="100014-380x380.jpg"]').should('not.be.exist')
    })

    it.skip('Change colour of the item', () => {
        search.findItemByName('Womens high heel point toe stiletto sandals ankle strap court shoes')
        cy.get('[id^="option3477"]').eq(0).should('be.checked')
        cy.get('[id^="option3477"]').eq(2).should('not.be.checked')
        cy.get('[id^="option3477"]').eq(2).check()
        cy.get('[id^="option3477"]').eq(2).should('be.checked')
        cy.get('[id^="option3477"]').eq(0).should('not.be.checked')
        cy.get('.cart').click()
        cy.get('.product-list').should('include.text', 'Colour green')
    })
  })