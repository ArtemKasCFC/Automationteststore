class ProductPage {
  addItem(name) {
    let totalQuantity = 0,
      totalPrice = 0,
      itemPrice = 0,
      itemQuantity = 0,
      itemModel;
    cy.get(".dropdown-toggle > .label").then((num) => {
      totalQuantity += +num.text();
    });
    cy.get(".cart_total").then((price) => {
      totalPrice = +price.text().slice(1);
    });
    cy.get(".prdocutname").contains(name).click();
    cy.get(".productpageprice").then((price) => {
      price = price.text().split("$");
      itemPrice += +price[1];
      totalPrice += +price[1];
      itemQuantity += 1;
      totalQuantity += 1;
    });
    cy.get(".productinfo > :nth-child(2)").then((model) => {
      itemModel = model.text().slice(6);
      cy.log(itemModel);
    });
    cy.get(".cart").click();
    cy.get(".dropdown-toggle > .label").then((num) => {
      const quantity = +num.text();
      expect(totalQuantity).eql(quantity);
    });
    cy.get(".cart_total").then((price) => {
      price = +price.text().slice(1, 5);
      expect(totalPrice).eql(price);
    });
    cy.get(".name").then((el) => {
      expect(el.text()).include(name);
    });
    cy.get("tbody > :nth-child(2) > :nth-child(4)").then((price) => {
      expect(+price.text().slice(1)).eql(itemPrice);
    });
    cy.get("#cart_quantity72")
      .invoke("val")
      .then((value) => {
        expect(+value).eql(itemQuantity);
      });
    cy.get("tbody > :nth-child(2) > :nth-child(3)").then((model) => {
      expect(itemModel).include(model.text());
    });
    cy.get("tbody > :nth-child(2) > :nth-child(6)").then((total) => {
      expect(+total.text().slice(1)).eql(itemPrice * itemQuantity);
    });
  }
}

export default ProductPage;
