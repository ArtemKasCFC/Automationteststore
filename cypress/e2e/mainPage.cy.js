/// <reference types="Cypress" />

describe('Main page', () => {
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it.skip('Check filtering items by discount', () => {
        cy.get('[data-id="menu_specials"]').contains('Specials').click()
        cy.get('.grid .thumbnail').each(item => {
            expect(item.children('span')).have.class('sale')
        })
        cy.get('.grid .price').each(price => {
            expect(price.children('div')).have.class('pricenew')
            expect(price.children('div')).have.class('priceold')
        })
    })

  })