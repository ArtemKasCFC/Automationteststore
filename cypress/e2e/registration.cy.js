import Registration from "../support/pageObject/registration"
import RandomValue from "../support/pageObject/random"


/// <reference types="Cypress" />

describe("Registration", () => {
  const registration = new Registration(),
        randomValue = new RandomValue();

  beforeEach(() => {
    cy.visit("/" + "index.php?rt=account/create");
  });

  it("Registration with min valid values", () => {
    const minFirstName = randomValue.field(1, 1, "firstname"),
      minlastName = randomValue.field(1, 1, "lastname"),
      minEmail = randomValue.email(1, 1, 1, 1, 2, 2),                  // min 1 1 2 maxsum 94(without '.' and '@') max 91 62 16
      minTelephone = randomValue.field(3, 3, "telephone"),
      fax = randomValue.field(1, 1, "fax"),
      company = randomValue.field(1, 1, "company"),
      minAddressOne = randomValue.field(3, 3, "address"),
      minAddressTwo = randomValue.field(3, 3, "address"),
      minCity = randomValue.field(3, 3, "city"),
      minZip = randomValue.field(3, 3, "zipcode"),
      minLogin = randomValue.field(5, 5, "login"),
      minPassword = randomValue.field(4, 4, "password");
    
      registration.fillInForms(
      minFirstName,
      minlastName,
      minEmail,
      minAddressOne,
      minAddressTwo,
      minCity,
      "Belarus",
      "Horad Minsk",
      minZip,
      minLogin,
      minPassword,
      minPassword,
      minTelephone,
      fax,
      company,
      true,
      false,
      true
    );
  });
});
  // name,surname 1-32 | address,city 3-128 | password 4-20 | zip 3-10 | login 5-64 | telephone 3-32