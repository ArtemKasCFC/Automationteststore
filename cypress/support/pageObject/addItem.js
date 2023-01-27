import Search from "./search";
const searchItem = new Search()

class AddItem {
  addItem(name, quantity, search) {
    let totalQuantity = 0,
        totalPrice = 0,
        itemPrice = 0,
        itemQuantity = 0,
        itemModel;


    cy.get(".dropdown-toggle > .label").then((quantity) => {
      totalQuantity += +quantity.text();
    });
    cy.get('.dropdown-toggle > .cart_total').then((price) => {
      totalPrice = +price.text().slice(1);
    });

    if(search){
      searchItem.findItemByName(name)
    }

    cy.url().then((url) => {
      if (url.includes("product_id")) {
        cy.get("#product_quantity").type(`{backspace}${quantity}`);
        cy.get(".productpageprice > *").first().then((price) => {
            price = +price.text().replace("$", "");
            itemPrice += price;
            totalPrice += price * quantity;
            itemQuantity += quantity;
            totalQuantity += quantity;
            cy.log(itemPrice.toFixed(2))
        });
        cy.get(".productinfo > :nth-child(2)").then((model) => {
          itemModel = model.text().slice(6);
        });
        cy.get(".cart").click();
      } else {
        cy.get('.fixed > .prdocutname').each((itemName, ind) => {
          if (itemName.text().includes(name)) {
            cy.get(".pricetag").eq(ind).find('.price > *').first()
              .then((price) => {
                price = +price.text().replace("$", "");
                itemPrice += price;
                totalPrice += price * quantity;
                itemQuantity += quantity;
                totalQuantity += quantity;
              });
            for(let i = 0; i < quantity; ++i){
              cy.get(".pricetag").eq(ind).find(".productcart").click();
            }
            cy.get(".pricetag").eq(ind).should("have.css", "color").and("eql", "rgb(60, 118, 61)");
          }
        });
        cy.get('[data-id="menu_cart"]').first().click()
      }
    });

    cy.wait(1000)
    cy.get(".dropdown-toggle > .label").then((quantity) => {
      quantity = +quantity.text();
      expect(totalQuantity).eql(quantity);
    });
    cy.get('.dropdown-toggle > .cart_total').then((price) => {
      console.log(price.text().replace(/[^0-9.]/g, ""))
      price = +price.text().replace(/[^0-9.]/g, "")
      expect(totalPrice.toFixed(2)).eql(price.toFixed(2));
    });

  
    if (quantity > 0) {
      cy.get(".name").then((el) => {
        expect(el.text()).include(name);
      });
      cy.get("tbody > :nth-child(2) > :nth-child(4)").then((price) => {
        price = +price.text().replace(/[^0-9.]/g, "");
        expect(price.toFixed(2)).eql(itemPrice.toFixed(2));
      });
      cy.get("[id^='cart_quantity']")
        .invoke("val")
        .then((value) => {
          expect(+value).eql(itemQuantity);
        });
      if(itemModel){
        cy.get("tbody > :nth-child(2) > :nth-child(3)").then((model) => {
            expect(itemModel).include(model.text());
          });
      }  
      cy.get("tbody > :nth-child(2) > :nth-child(6)").then((total) => {
        total = +total.text().replace(/[^0-9.]/g, "");
        expect(total.toFixed(2)).eql((itemPrice * itemQuantity).toFixed(2));
      });
    }
  }
}

export default AddItem;
