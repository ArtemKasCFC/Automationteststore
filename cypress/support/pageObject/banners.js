class Banners {
checkBannersVisibility(visibleID, ...notVisibleID){
    cy.get(`[data-banner-id="${visibleID}"]`).should('be.visible')
    notVisibleID.forEach(id => cy.get(`[data-banner-id="${id}"]`).should('not.be.visible'))
}
}

export default Banners;