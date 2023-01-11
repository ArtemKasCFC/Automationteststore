class Search {
 findItemByName(name) {
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

 findSeveralItems(word){
   let names = []
   cy.get('#filter_keyword').type(word)
   cy.get('[title="Go"]').click()
   cy.get('#sort').select('Name A - Z')
   cy.get('.fixed > .prdocutname').each(itemName => {
      itemName = itemName.text().toLowerCase()
      expect(itemName).include(word)
      names.push(itemName)
   })
   cy.wrap(names).then(name => {
      expect(name).to.be.ascending
   })
   cy.get('#sort').select('Name Z - A')
   cy.get('.fixed > .prdocutname').each((itemName) => {
      itemName = itemName.text().toLowerCase()
      expect(itemName).include(word)
      names.shift()
      names.push(itemName)
   })
   cy.wrap(names).then(name => {
      expect(name).to.be.descending
   })
 }
}

export default Search;