import { signUp, signIn } from "../elementos/signUp.elements";
import { generateEmail} from '../../support/utils/generateEmail'
import { accountcreated } from "../../support/elementos/myaccount";

class SignUp {

    createanaccount(){
        const email= generateEmail()
        console.log(`clara-teganhe+${email}+@tuamaeaquelaursa.com`)
        cy.get(signUp.inputEmailAdress).type(email)
        cy.get(signUp.buttonSubmitCreate).click()
        // return email
    }

    formCreateAccount(email){
        cy.get(signUp.inputGenderFemale).click()
        cy.get(signUp.inputFirstName).type("Priscila")
        cy.get(signUp.inputLastName).type("Caimi")
        // expect(cy.get(signUp.inputEmail)).contains(email)
        cy.get(signUp.inputPassword).type("teste123") 
        cy.get(signUp.selectDays).select('13')
        cy.get(signUp.selectMonths).select('March')
        cy.get(signUp.selectYears).select('1993')
        cy.get(signUp.buttonSubmit).click()       
    }

    loginAccount(email, password){
        cy.get(signIn.inputEmail).type(email)
        cy.get(signUp.inputPassword).type(password)
        cy.get(signIn.btnSignIn).click()
        cy.get(accountcreated.pageHeader).contains("My account")
    }
}

export default new SignUp();