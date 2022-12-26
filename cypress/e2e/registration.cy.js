import Registration from "../support/pageObject/registration"
import RandomValue from "../support/pageObject/random"

/// <reference types="Cypress" />

describe("Registration", () => {
  const registration = new Registration(),
        randomValue = new RandomValue();

  const randomFirstName = randomValue.field(1, 32, "name"),
        randomLastName = randomValue.field(1, 32, "name"),
        randomEmail = randomValue.email(1, 47, 1, 31, 2, 16),                 
        randomTelephone = randomValue.field(3, 32, "telephone"),
        randomFax = randomValue.field(1, 32, "fax"),
        randomCompany = randomValue.field(1, 64, "company"),
        randomAddressOne = randomValue.field(3, 128, "address"),
        randomAddressTwo = randomValue.field(3, 128, "address"),
        randomCity = randomValue.field(3, 128, "city"),
        randomZip = randomValue.field(3, 10, "zipcode"),
        randomLogin = randomValue.field(5, 64, "login"),
        randomPassword = randomValue.field(4, 20, "password");

  beforeEach(() => {
    cy.visit("/" + "index.php?rt=account/create");
  });

  it.skip("Registration with min valid values", () => {
    const minFirstName = randomValue.field(1, 1, "name"),
      minLastName = randomValue.field(1, 1, "name"),
      minEmail = randomValue.email(1, 1, 1, 1, 2, 2),                  // min 1 1 2 maxsum 94(without '.' and '@') max 91 62 16
      minTelephone = randomValue.field(3, 3, "telephone"),
      minFax = randomValue.field(1, 1, "fax"),
      minCompany = randomValue.field(1, 1, "company"),
      minAddressOne = randomValue.field(3, 3, "address"),
      minAddressTwo = randomValue.field(3, 3, "address"),
      minCity = randomValue.field(3, 3, "city"),
      minZip = randomValue.field(3, 3, "zipcode"),
      minLogin = randomValue.field(5, 5, "login"),
      minPassword = randomValue.field(4, 4, "password");
    
      registration.fillInForms(
      minFirstName,
      minLastName,
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
      minFax,
      minCompany,
      true,
      true,
      'success'
    );
  });

  it.skip("Registration with max valid values", () => {
    const maxFirstName = randomValue.field(32, 32, "name"),
      maxLastName = randomValue.field(32, 32, "name"),
      maxEmail = randomValue.email(47, 47, 31, 31, 16, 16),                  // min 1 1 2 maxsum 94(without '.' and '@') max 91 62 16
      maxTelephone = randomValue.field(32, 32, "telephone"),
      maxFax = randomValue.field(32, 32, "fax"),
      maxCompany = randomValue.field(64, 64, "company"),
      maxAddressOne = randomValue.field(128, 128, "address"),
      maxAddressTwo = randomValue.field(128, 128, "address"),
      maxCity = randomValue.field(128, 128, "city"),
      maxZip = randomValue.field(10, 10, "zipcode"),
      maxLogin = randomValue.field(64, 64, "login"),
      maxPassword = randomValue.field(20, 20, "password");
    
      registration.fillInForms(
      maxFirstName,
      maxLastName,
      maxEmail,
      maxAddressOne,
      maxAddressTwo,
      maxCity,
      "Belarus",
      "Horad Minsk",
      maxZip,
      maxLogin,
      maxPassword,
      maxPassword,
      maxTelephone,
      maxFax,
      maxCompany,
      true,
      true,
      'success'
    );
  });

  it.skip("Registration with min-1 length in First Name field ", () => {
    
      registration.fillInForms(
      '{backspace}',
      randomLastName,
      randomEmail,
      randomAddressOne,
      randomAddressTwo,
      randomCity,
      "Belarus",
      "Horad Minsk",
      randomZip,
      randomLogin,
      randomPassword,
      randomPassword,
      randomTelephone,
      randomFax,
      randomCompany,
      true,
      true,
      'nameFieldLength'
    );
  });

  it.skip("Registration with max+1 length in First Name field ", () => {
    
    const maxPlusOneFN = randomValue.field(33, 33, "name")
    
    registration.fillInForms(
    maxPlusOneFN,
    randomLastName,
    randomEmail,
    randomAddressOne,
    randomAddressTwo,
    randomCity,
    "Belarus",
    "Horad Minsk",
    randomZip,
    randomLogin,
    randomPassword,
    randomPassword,
    randomTelephone,
    randomFax,
    randomCompany,
    true,
    true,
    'nameFieldLength'
  );
});

it.skip("Registration with min-1 length in Last Name field ", () => {
  
  registration.fillInForms(
  randomFirstName,
  '{backspace}',
  randomEmail,
  randomAddressOne,
  randomAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'lastNameLength'
);
});

it.skip("Registration with max+1 length in Last Name field ", () => {
    
  const maxPlusOneLN = randomValue.field(33, 33, "name")
  
  registration.fillInForms(
  randomFirstName,
  maxPlusOneLN,
  randomEmail,
  randomAddressOne,
  randomAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'lastNameLength'
);
});

it.skip("Registration with min-1 length in Address 1 field ", () => {

  const minMinusAddressOne = randomValue.field(2, 2, "address")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  minMinusAddressOne,
  randomAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'AddressOneLength'
);
});

it.skip("Registration with max+1 length in Address 1 field ", () => {
    
  const maxPlusAddressOne = randomValue.field(129, 129, "address")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  maxPlusAddressOne,
  randomAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'AddressOneLength'
);
});
// Bug. Success reg.
it.skip("Registration with min-1 length in Address 2 field ", () => {

  const minMinusAddressTwo = randomValue.field(2, 2, "address")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  randomAddressOne,
  minMinusAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'AddressTwoLength'
);
});

it.skip("Registration with max+1 length in Address 2 field ", () => {
    
  const maxPlusAddressTwo = randomValue.field(129, 129, "address")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  randomAddressOne,
  maxPlusAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'AddressTwoLength'
);
});
it.skip("Registration with min-1 length in City field ", () => {

  const minMinusCity = randomValue.field(2, 2, "city")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  randomAddressOne,
  randomAddressTwo,
  minMinusCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'CityLength'
);
});

it.skip("Registration with max+1 length in City field ", () => {
    
  const maxPlusCity = randomValue.field(129, 129, "city")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  randomAddressOne,
  randomAddressTwo,
  maxPlusCity,
  "Belarus",
  "Horad Minsk",
  randomZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'CityLength'
);
});

it.skip("Registration with min-1 length in ZIP Code field ", () => {

  const minMinusZip = randomValue.field(2, 2, "zipcode")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  randomAddressOne,
  randomAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  minMinusZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'ZIPLength'
);
});
// Bug
it.skip("Registration with max+1 length in ZIP Code field ", () => {
    
  const maxPlusZip = randomValue.field(11, 11, "zipcode")
  
  registration.fillInForms(
  randomFirstName,
  randomLastName,
  randomEmail,
  randomAddressOne,
  randomAddressTwo,
  randomCity,
  "Belarus",
  "Horad Minsk",
  maxPlusZip,
  randomLogin,
  randomPassword,
  randomPassword,
  randomTelephone,
  randomFax,
  randomCompany,
  true,
  true,
  'ZIPLength'
);
});
});
  // name,surname 1-32 | address,city 3-128 | password 4-20 | zip 3-10 | login 5-64 | telephone 3-32
  // add tests --- min -1, max +1, requried fields...