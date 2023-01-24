class ProductPage {
  addItem(name, quantity) {
    let totalQuantity = 0,
        totalPrice,
        itemPrice = 0,
        itemQuantity = 0,
        itemModel;
    cy.get(".dropdown-toggle > .label").then((num) => {
      totalQuantity += +num.text();
    });
    cy.get(".cart_total").then((price) => {
      totalPrice = +price.text().slice(1);
    });
    cy.get('#filter_keyword').type(name)
    cy.get('[title="Go"]').click()
    cy.url().then(url => {
      if(url.includes('search')){
        cy.get(".prdocutname").contains(name).eq(1).click({force: true});
      }
    })
    cy.get('#product_quantity').type(`{backspace}${quantity}`)
    cy.get(".productpageprice").then((price) => {
      price = price.text().split("$");
      itemPrice += +price[1];
      totalPrice += ((+price[1]) * quantity);
      itemQuantity += quantity;
      totalQuantity += quantity;
    });
    cy.get(".productinfo > :nth-child(2)").then((model) => {
      itemModel = model.text().slice(6);
    });
    cy.get(".cart").click();
    cy.get(".dropdown-toggle > .label").then((num) => {
      const quantityDDL = +num.text();
      expect(totalQuantity).eql(quantityDDL);
    });
    cy.get(".cart_total").then((price) => {
      price = +price.text().replace(/[^0-9.]/g, '');
      expect(totalPrice.toFixed(2)).eql(price.toFixed(2));
    });
    if(quantity > 0){
      cy.get(".name").then((el) => {
      expect(el.text()).include(name);
    });
    cy.get("tbody > :nth-child(2) > :nth-child(4)").then((price) => {
      price = +price.text().replace(/[^0-9.]/g, '')
      expect(price.toFixed(2)).eql(itemPrice.toFixed(2));
    });
    cy.get("[id^='cart_quantity']")
      .invoke("val")
      .then((value) => {
        expect(+value).eql(itemQuantity);
      });
    cy.get("tbody > :nth-child(2) > :nth-child(3)").then((model) => {
      expect(itemModel).include(model.text());
    });
    cy.get("tbody > :nth-child(2) > :nth-child(6)").then((total) => {
      total = +total.text().replace(/[^0-9.]/g, '')
      expect(total.toFixed(2)).eql((itemPrice * itemQuantity).toFixed(2));
    });
  }
  }
}

export default ProductPage;
