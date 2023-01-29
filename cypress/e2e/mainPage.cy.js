import MainPage from "../support/pageObject/mainPage"


/// <reference types="Cypress" />

describe('Main Page', () => {

    const mainPage = new MainPage()
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Check that hero image in the main page can be changed automatically', () => {
        mainPage.checkBannersVisibility(9, 10, 17)
        cy.wait(7000)
        mainPage.checkBannersVisibility(10, 9, 17)
        cy.wait(7000)
        mainPage.checkBannersVisibility(17, 9, 10)
    })

    it('Check that hero image in the main page can be changed by arrow button', () => {
        mainPage.checkBannersVisibility(9, 10, 17)
        cy.get('.nextArrow').click({force: true})
        mainPage.checkBannersVisibility(10, 9, 17)
        cy.get('.prevArrow').click({force: true})
        mainPage.checkBannersVisibility(9, 10, 17)
    })

    it('Check that hero image in the main page can be changed by drag and drop', () => {
        mainPage.checkBannersVisibility(9, 10, 17)
        cy.get('[data-banner-id="9"').trigger('mousedown', { which: 1})
                                     .trigger('mousemove', { which: 1, pageX: 100, pageY: 600 })
                                     .trigger('mouseup', {force: true})
        mainPage.checkBannersVisibility(10, 9, 17)
        cy.get('[data-banner-id="10"').trigger('mousedown', { which: 1})
                                      .trigger('mousemove', { which: 1, pageX: 1100, pageY: 600 })
                                      .trigger('mouseup', {force: true})
        mainPage.checkBannersVisibility(9, 10, 17)
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