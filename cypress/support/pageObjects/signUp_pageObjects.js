import { signUp } from "../elementos/signUp_elements";
import { generateEmail} from '../../support/utils/generateEmail'

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
}

export default new SignUp();