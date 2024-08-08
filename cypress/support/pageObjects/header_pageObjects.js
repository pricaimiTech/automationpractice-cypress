import { header } from "../elementos/header_elements";

class Header {

    signIn(){
        cy.get(header.sigIn).click()
    }
}


export default new Header();