import AddItem from "../support/pageObject/addItem"

/// <reference types="Cypress" />

describe('Adding an item to the shopping cart', () => {

  const addItem = new AddItem()
  
  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('Add an item to the shopping cart from main page', () => {
    addItem.addItem('Skinsheen Bronzer Stick', 1)
  })

  it.skip('Add an item to the shopping cart from product page', () => {
    addItem.addItem('Brunette expressions Conditioner', 1, true)
  })

  it.skip("Add an item to the shopping cart from the search results page", () => {
    cy.get('#filter_keyword').type('Men')
    cy.get('[title="Go"]').click()
    addItem.addItem('Men+Care Active Clean Shower Tool', 1)
  })

  it.skip('Add an item to the shopping cart from the brand page', () => { 
    cy.get('#brandcarousal [alt="Benefit"]').click()
    addItem.addItem('Product with stock locations', 1)
  })

  it.skip('Add an item to the shopping cart from the category page', () => { 
  cy.get('.categorymenu > li > a').contains('Men').click()
    addItem.addItem('Dove Men +Care Body Wash', 1)
  })

  it.skip('Add an item to the shopping cart from the subcategory page', () => { 
    cy.get('.categorymenu > li > a').contains('Skincare').siblings('.subcategories').contains('Eyes').click({force : true})
    addItem.addItem('Absolue Eye Precious Cells', 1) //Maybe bug
  }) 

  it.skip('Add an item to the shopping cart by changing quantity of the item in the product page', () => { 
    addItem.addItem('Absolue Eye Precious Cells', 3, true)
  })

  it.skip('Add an item to the shopping cart by changing quantity of the item in the shopping cart page', () => { 
    let quantity = 2,
        oneItemPrice = 0,
        totalItemPrice = 0;
    addItem.addItem('Total Moisture Facial Cream', 1)
    cy.get("tbody > :nth-child(2) > :nth-child(4)").then((price) => {
      oneItemPrice = +price.text().replace(/[^0-9.]/g, "");
    })
    cy.get("tbody > :nth-child(2) > :nth-child(6)").then((total) => {
      totalItemPrice = +total.text().replace(/[^0-9.]/g, "");
    });
    cy.get("[id^='cart_quantity']").type(`{backspace}${quantity}`)
    cy.get('#cart_update').click()
    cy.get("tbody > :nth-child(2) > :nth-child(4)").then((price) => {
      price = +price.text().replace(/[^0-9.]/g, "");
      expect(price.toFixed(2)).eql(oneItemPrice.toFixed(2));
    })
    cy.get("tbody > :nth-child(2) > :nth-child(6)").then((total) => {
      total = +total.text().replace(/[^0-9.]/g, "");
      expect(total.toFixed(2)).eql((totalItemPrice * quantity).toFixed(2));
    });
  })

  it.skip('Remove an item from the shopping cart by changing quantity of the item in the shopping cart page', () => {
    addItem.addItem('Brunette expressions Conditioner', 1)
    cy.get("[id^='cart_quantity']").clear()
    cy.get('#cart_update').click()
    cy.get('.contentpanel').then(text => {
      expect(text.text()).include('Your shopping cart is empty!')
    })
  })

  it.skip('Remove an item from the shopping cart by typing "0" in quantity of the item in the shopping cart page', () => {
    addItem.addItem('Brunette expressions Conditioner', 1)
    cy.get("[id^='cart_quantity']").type(`{backspace}${0}`)
    cy.get('#cart_update').click()
    cy.get('.contentpanel').then(text => {
      expect(text.text()).include('Your shopping cart is empty!')
    })
  })

  it.skip('Remove multiple items with the same name from the shopping cart by clicking delete icon in the shopping cart page', () => {
    addItem.addItem('Brunette expressions Conditioner', 5)
    cy.get(':nth-child(7) > .btn').click()
    cy.get('.contentpanel').then(text => {
      expect(text.text()).include('Your shopping cart is empty!')
    })
  })

  it.skip('Open the empty shopping cart page by clicking on the cart button in the header of the page', () => {
    cy.get('[data-id="menu_cart"]').first().click()
    cy.url().should('include', 'cart')
    cy.get('.maintext').should('include.text', 'Shopping Cart')
  })
  
   it.skip('Open the shopping cart page by clicking on the Shopping Cart DDL', () => { 
    cy.get('.dropdown-toggle > .fa').click()
    cy.url().should('include', 'cart')
    cy.get('.maintext').should('include.text', 'Shopping Cart')
  })
  
   it.skip('Open the shopping cart page by clicking on the cart button in the Shopping Cart DDL', () => { 
    cy.get('.dropdown-toggle > .fa').trigger('mouseover')
    cy.get('[title="View Cart"]').should('be.visible').click()
    cy.url().should('include', 'cart')
    cy.get('.maintext').should('include.text', 'Shopping Cart')
  })
})
