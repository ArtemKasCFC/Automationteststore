class Search {
 findItem(name) {
    cy.get('#filter_keyword').type(name)
    cy.get('[title="Go"]').click()
    cy.get('.bgnone').should('include.text', name)
 }

 findItemByArticle(article) {
    cy.get('#filter_keyword').type(article)
    cy.get('[title="Go"]').click()
    cy.get('#model').check()
    cy.get('#search_button').click()
    cy.get('.productinfo').should('include.text', article)
 }

 findItemByDescription(description) {
    cy.get('#filter_keyword').type(description)
    cy.get('[title="Go"]').click()
    cy.get('#description').check()
    cy.get('#search_button').click()
    cy.get('.tab-content').should('include.text', description)
 }
}

export default Search;