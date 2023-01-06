/// <reference types="Cypress" />

describe('Check banners', () => {
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it.skip('Check that banners in the main page can change automatically', () => {
        cy.get('[data-banner-id="9"]').should('be.visible')
        cy.get('[data-banner-id="10"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
        cy.wait(7000).get('[data-banner-id="10"]').should('be.visible')
        cy.get('[data-banner-id="9"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
        cy.wait(7000).get('[data-banner-id="17"]').should('be.visible')
        cy.get('[data-banner-id="9"]').should('not.be.visible')
        cy.get('[data-banner-id="10"]').should('not.be.visible')
    })

    it.skip('Check that banners in the main page can change by arrow button', () => {
        cy.get('[data-banner-id="9"]').should('be.visible')
        cy.get('[data-banner-id="10"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
        cy.get('.nextArrow').click()
        cy.get('[data-banner-id="10"]').should('be.visible')
        cy.get('[data-banner-id="9"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
        cy.get('.prevArrow').click()
        cy.get('[data-banner-id="9"]').should('be.visible')
        cy.get('[data-banner-id="10"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
    })

    it.skip('Check that banners in the main page can change by drag and drop', () => {
        cy.get('[data-banner-id="9"]').should('be.visible')
        cy.get('[data-banner-id="10"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
        cy.get('[data-banner-id="9"').trigger('mousedown', { which: 1})
                                     .trigger('mousemove', { which: 1, pageX: 100, pageY: 600 })
                                     .trigger('mouseup')
        cy.get('[data-banner-id="10"]').should('be.visible')
        cy.get('[data-banner-id="9"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
        cy.get('[data-banner-id="10"').trigger('mousedown', { which: 1})
                                      .trigger('mousemove', { which: 1, pageX: 1100, pageY: 600 })
                                      .trigger('mouseup')
        cy.get('[data-banner-id="9"]').should('be.visible')
        cy.get('[data-banner-id="10"]').should('not.be.visible')
        cy.get('[data-banner-id="17"]').should('not.be.visible')
    })
  })