import Registration from "../support/pageObject/registration"
import RandomValue from "../support/pageObject/random"

/// <reference types="Cypress" />

describe("Registration", () => {
  const registration = new Registration(),
        randomValue = new RandomValue();

  let randomFirstName,
      randomLastName,
      randomEmail,                 
      randomTelephone,
      randomFax,
      randomCompany,
      randomAddressOne,
      randomAddressTwo,
      randomCity,
      randomZip,
      randomLogin,
      randomPassword,
      validRandomValues = [];


  beforeEach(() => {
        randomFirstName = randomValue.field(1, 32, "name"),
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
        validRandomValues = [
          randomFirstName,
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
          "success"
        ];
    cy.visit("/" + "index.php?rt=account/create");
});

it("Registration with min valid values", () => {
    validRandomValues[0] = randomValue.field(1, 1, "name"),
    validRandomValues[1] = randomValue.field(1, 1, "name"),
    validRandomValues[2] = randomValue.email(1, 1, 1, 1, 2, 2),                  
    validRandomValues[12] = randomValue.field(3, 3, "telephone"),
    validRandomValues[13] = randomValue.field(1, 1, "fax"),
    validRandomValues[14] = randomValue.field(1, 1, "company"),
    validRandomValues[3] = randomValue.field(3, 3, "address"),
    validRandomValues[4] = randomValue.field(3, 3, "address"),
    validRandomValues[5] = randomValue.field(3, 3, "city"),
    validRandomValues[8] = randomValue.field(3, 3, "zipcode"),
    validRandomValues[9] = randomValue.field(5, 5, "login"),
    validRandomValues[10] = randomValue.field(4, 4, "password"),
    validRandomValues[11] = validRandomValues[10];
    registration.fillInForms(validRandomValues);
});

it("Registration with max valid values", () => {
    validRandomValues[0] = randomValue.field(32, 32, "name"),
    validRandomValues[1] = randomValue.field(32, 32, "name"),
    validRandomValues[2] = randomValue.email(47, 47, 31, 31, 16, 16),                  
    validRandomValues[12] = randomValue.field(32, 32, "telephone"),
    validRandomValues[13] = randomValue.field(32, 32, "fax"),
    validRandomValues[14] = randomValue.field(64, 64, "company"),
    validRandomValues[3] = randomValue.field(128, 128, "address"),
    validRandomValues[4] = randomValue.field(128, 128, "address"),
    validRandomValues[5] = randomValue.field(128, 128, "city"),
    validRandomValues[8] = randomValue.field(10, 10, "zipcode"),
    validRandomValues[9] = randomValue.field(64, 64, "login"),
    validRandomValues[10] = randomValue.field(20, 20, "password");
    validRandomValues[11] = validRandomValues[10];
    registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in First Name field ", () => {
      validRandomValues[0] = '{backspace}'
      validRandomValues[17] = 'firstNameLength'
      registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in First Name field ", () => {
    
    validRandomValues[0] = randomValue.field(33, 33, "name")
    validRandomValues[17] = 'firstNameLength'
    registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in Last Name field ", () => {
  
  validRandomValues[1] = '{backspace}'
  validRandomValues[17] = 'lastNameLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Last Name field ", () => {
    
  validRandomValues[1] = randomValue.field(33, 33, "name")
  validRandomValues[17] = 'lastNameLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in Address 1 field ", () => {

  validRandomValues[3] = randomValue.field(2, 2, "address")
  validRandomValues[17] = 'AddressOneLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Address 1 field ", () => {
    
  validRandomValues[3] = randomValue.field(129, 129, "address")
  validRandomValues[17] = 'AddressOneLength'
  registration.fillInForms(validRandomValues);
});
// Bug. Success reg.
it("Registration with min-1 length in Address 2 field ", () => {

  validRandomValues[4] = randomValue.field(2, 2, "address")
  validRandomValues[17] = 'AddressTwoLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Address 2 field ", () => {
    
  validRandomValues[4] = randomValue.field(129, 129, "address")
  validRandomValues[17] = 'AddressTwoLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in City field ", () => {

  validRandomValues[5] = randomValue.field(2, 2, "city")
  validRandomValues[17] = 'CityLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in City field ", () => {
    
  validRandomValues[5] = randomValue.field(129, 129, "city")
  validRandomValues[17] = 'CityLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in ZIP Code field ", () => {
  
  validRandomValues[8] = randomValue.field(2, 2, "zipcode")
  validRandomValues[17] = 'ZIPLength'
  registration.fillInForms(validRandomValues);
});
// Bug
it("Registration with max+1 length in ZIP Code field ", () => {
    
  validRandomValues[8] = randomValue.field(11, 11, "zipcode")
  validRandomValues[17] = 'ZIPLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in Login field ", () => {

  validRandomValues[9] = randomValue.field(4, 4, "login")
  validRandomValues[17] = 'LoginLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Login field ", () => {
    
  validRandomValues[9] = randomValue.field(65, 65, "login")
  validRandomValues[17] = 'LoginLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in Password field ", () => {

  validRandomValues[10] = randomValue.field(3, 3, "password")
  validRandomValues[11] = validRandomValues[10]
  validRandomValues[17] = 'PasswordLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Password field ", () => {
    
  validRandomValues[10] = randomValue.field(21, 21, "password")
  validRandomValues[11] = validRandomValues[10]
  validRandomValues[17] = 'PasswordLength'
  registration.fillInForms(validRandomValues);
});
//bug
it("Registration with min-1 length in Telephone field ", () => {

  validRandomValues[12] = randomValue.field(2, 2, "telephone"),
  validRandomValues[17] = 'TelephoneLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Telephone field ", () => {
    
  validRandomValues[12] = randomValue.field(33, 33, "telephone"),
  validRandomValues[17] = 'TelephoneLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in Email field before '@' ", () => {

  validRandomValues[2] = randomValue.email(0, 0, 1, 62, 2, 16),
  validRandomValues[17] = 'emailLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Email field before '@' ", () => {
    
  validRandomValues[2] = randomValue.email(92, 92, 1, 1, 2, 2),
  validRandomValues[17] = 'emailLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in Email field after '@' and before last '.' ", () => {

  validRandomValues[2] = randomValue.email(1, 70, 0, 0, 2, 16),
  validRandomValues[17] = 'emailLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Email field after '@' and before last '.' ", () => {
    
  validRandomValues[2] = randomValue.email(1, 10, 63, 63, 2, 16),
  validRandomValues[17] = 'emailLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with min-1 length in Email field after last '.' ", () => {

  validRandomValues[2] = randomValue.email(1, 45, 1, 45, 1, 1),
  validRandomValues[17] = 'emailLength'
  registration.fillInForms(validRandomValues);
});

it("Registration with max+1 length in Email field after last '.' ", () => {
    
  validRandomValues[2] = randomValue.email(35, 35, 35, 35, 17, 17),
  validRandomValues[17] = 'emailLength'
  registration.fillInForms(validRandomValues);
});

it("Check that Email field is required", () => {
    
  validRandomValues[2] = '{backspace}',
  validRandomValues[17] = 'emailLength'
  registration.fillInForms(validRandomValues);
});

it("Check that Address 1 field is required", () => {
    
  validRandomValues[3] = '{backspace}',
  validRandomValues[17] = 'AddressOneLength'
  registration.fillInForms(validRandomValues);
});

it("Check that City field is required", () => {
    
  validRandomValues[5] = '{backspace}',
  validRandomValues[17] = 'CityLength'
  registration.fillInForms(validRandomValues);
});

it("Check that Country field is required", () => {
  validRandomValues[6] = 0,
  validRandomValues[7] = 0,
  validRandomValues[17] = 'CountryReq' 
  registration.fillInForms(validRandomValues);
});

it("Check that Region field is required", () => {
  validRandomValues[7] = 0,
  validRandomValues[17] = 'RegionReq'
  registration.fillInForms(validRandomValues);
});

it("Check that ZIPCode field is required", () => {
  validRandomValues[8] = '{backspace}'
  validRandomValues[17] = 'ZIPLength'
  registration.fillInForms(validRandomValues);
});

it("Check that Login field is required", () => {
  validRandomValues[9] = '{backspace}'
  validRandomValues[17] = 'LoginLength'
  registration.fillInForms(validRandomValues);
});

it("Check that Password field is required", () => {
  validRandomValues[10] = '{backspace}'
  validRandomValues[11] = validRandomValues[10]
  validRandomValues[17] = 'PasswordLength'
  registration.fillInForms(validRandomValues);
});

it("Check registration without subscription to the news and that Telephone, Fax, Company, Address fields aren't required", () => {
  validRandomValues[4] = '{backspace}'
  validRandomValues[12] = '{backspace}'
  validRandomValues[13] = '{backspace}'
  validRandomValues[14] = '{backspace}'
  validRandomValues[15] = false
  registration.fillInForms(validRandomValues);
});

it("Check registration without agreement with Private Policy", () => {
 validRandomValues[16] = false
 validRandomValues[17] = "PPReq"
  registration.fillInForms(validRandomValues);
});

it("Check registration with difference between Password and Confirm Password", () => {
  validRandomValues[10] = randomValue.field(4, 19, "password");
  validRandomValues[11] =  validRandomValues[10] + 'a';
  validRandomValues[17] = 'ConfirmPassword'
  registration.fillInForms(validRandomValues);
});

it("Check registration with already registered email", () => {
 validRandomValues[2] = 'kroko@mail.ru'
 validRandomValues[17] = "registeredEmail"
  registration.fillInForms(validRandomValues);
});

it("Check registration with already registered login", () => {
  validRandomValues[9] = '6655321Orange'
  validRandomValues[17] = "registerdLogin"
  registration.fillInForms(validRandomValues);
});

});