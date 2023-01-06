import Banners from "../support/pageObject/banners"


/// <reference types="Cypress" />

describe('Check banners', () => {

    const banners = new Banners()
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Check that banners in the main page can change automatically', () => {
        banners.checkBannersVisibility(9, 10, 17)
        cy.wait(7000)
        banners.checkBannersVisibility(10, 9, 17)
        cy.wait(7000)
        banners.checkBannersVisibility(17, 9, 10)
    })

    it('Check that banners in the main page can change by arrow button', () => {
        banners.checkBannersVisibility(9, 10, 17)
        cy.get('.nextArrow').click({force: true})
        banners.checkBannersVisibility(10, 9, 17)
        cy.get('.prevArrow').click({force: true})
        banners.checkBannersVisibility(9, 10, 17)
    })

    it('Check that banners in the main page can change by drag and drop', () => {
        banners.checkBannersVisibility(9, 10, 17)
        cy.get('[data-banner-id="9"').trigger('mousedown', { which: 1})
                                     .trigger('mousemove', { which: 1, pageX: 100, pageY: 600 })
                                     .trigger('mouseup', {force: true})
        banners.checkBannersVisibility(10, 9, 17)
        cy.get('[data-banner-id="10"').trigger('mousedown', { which: 1})
                                      .trigger('mousemove', { which: 1, pageX: 1100, pageY: 600 })
                                      .trigger('mouseup', {force: true})
        banners.checkBannersVisibility(9, 10, 17)
    })
  })