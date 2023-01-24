class LoginPage {
    login(login, password, correct){
        cy.get('#main_menu_top > [data-id="menu_account"]').trigger('mouseover')
        cy.get('[id="main_menu_top"] [data-id="menu_login"]').should('be.visible').click()
        cy.get('#loginFrm_loginname').type(login)
        cy.get('#loginFrm_password').type(password)
        cy.get(".btn[title='Login']").click()
        if(correct){
          cy.get('.maintext').should('include.text','My Account')
        } else {
          cy.get('.alert').should('include.text', 'Incorrect login or password provided.')
        }
      }

      forgotLogin(lastname, email, errorType){
        cy.get('#main_menu_top > [data-id="menu_account"]').trigger('mouseover')
        cy.get('[id="main_menu_top"] [data-id="menu_login"]').should('be.visible').click()
        cy.get('.returncustomer').contains('Forgot your login?').click()
        cy.get('#forgottenFrm_lastname').type(lastname)
        cy.get('#forgottenFrm_email').type(email)
        cy.get('.col-md-12 > .btn-orange').click()
        let errorMessage;
        if(errorType === 'nonexistent'){
          errorMessage = 'No records found matching information your provided, please check your information and try again!'
        }
        else if(errorType === 'emptyEmail'){
          errorMessage = 'The Email address was not provided or not found in our records, please try again!'
        }
        else if(errorType === 'emptyLastName'){
          errorMessage = 'The Last name was not provided or not found in our records, please try again!'
        }
        cy.get('.alert').should('include.text', `Error: ${errorMessage}`)
      }

      forgotPassword(login, email, errorType){
        cy.get('#main_menu_top > [data-id="menu_account"]').trigger('mouseover')
        cy.get('[id="main_menu_top"] [data-id="menu_login"]').should('be.visible').click()
        cy.get('.returncustomer').contains('Forgot your password?').click()
        cy.get('#forgottenFrm_loginname').type(login)
        cy.get('#forgottenFrm_email').type(email)
        cy.get('.col-md-12 > .btn-orange').click()
        let errorMessage;
        if(errorType === 'nonexistent'){
          errorMessage = 'No records found matching information your provided, please check your information and try again!'
        }
        else if(errorType === 'emptyEmail'){
          errorMessage = 'The Email address was not provided or not found in our records, please try again!'
        }
        else if(errorType === 'emptyLogin'){
          errorMessage = 'The Login name was not provided or not found in our records, please try again!'
        }
        cy.get('.alert').should('include.text', `Error: ${errorMessage}`)
      }
}

export default LoginPage;