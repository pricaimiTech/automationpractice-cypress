import { adressForm } from "../elementos/yourAdress.elements";
import { adressFormDate } from "../../../environment/stg";

class AdressForm {
    addInformation(){
        cy.get(adressForm.company).type(adressFormDate.company)
        cy.get(adressForm.adress).type(adressFormDate.adress)
        cy.get(adressForm.adressLine2).type(adressFormDate.adressLine2)
        cy.get(adressForm.city).type(adressFormDate.city)
        cy.get(adressForm.state).select(adressFormDate.state)
        cy.get(adressForm.postcode).type(adressFormDate.postCode)
        cy.get(adressForm.country).select(adressFormDate.country)
        cy.get(adressForm.homePhone).type(adressFormDate.postCode)
        cy.get(adressForm.mobilePhone).type(adressFormDate.homePhone)
        cy.get(adressForm.additionalInformation).type(adressFormDate.additionInformation)
        cy.get(adressForm.assignAdress).type(adressFormDate.alias)
        // cy.get(adressForm.btnSubmitAdress).click()
    }
}

export default new AdressForm();