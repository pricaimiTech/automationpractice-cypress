import { email, password } from "../../../../environment/stg";
import { header } from "../../../support/elementos/header.elements";
import header_pageObjects from "../../../support/pageObjects/header_pageObjects";
import signUp_pageObjects from "../../../support/pageObjects/signUp_pageObjects";

describe('Sign In', () => {
  before('passes', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    header_pageObjects.signIn()
    signUp_pageObjects.loginAccount(email, password)
    cy.visit('http://www.automationpractice.pl/index.php')
  })
  
  it.skip('Search for a dress', () => {
    cy.get(header.search).type("Printed evening dress").type('{ENTER}')
    cy.get("div[id=center_column]  ul[class='product_list grid row']")
    .find("li div[class=product-image-container]")
    .click()
  });

  it('Visit dress page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_product=4&controller=product&search_query=Printed+evening+dress&results=1')
    cy.get("span[id=availability_value]").should('be.visible')

    const textLabel = "In stock"
    const spanText = cy.get("span[id=availability_value]").invoke("text")

    if(spanText == textLabel) {
      console.log("pode comprar o produto")
    }else {
      console.log("procurar o produto disponivel")
      cy.get("ul[id=color_to_pick_list]")
      .find("li[class=selected]") // procurar uma forma de adicionar o li que não contem a classe select
      .next()
      .click()

      cy.get("p[id=add_to_cart] ")
      .find("button")
      .click()

      cy.get("div[id=layer_cart]")
      .invoke('show')
      .find("div div span")
      .first()
      .next()
      .contains('Product successfully added to your shopping cart')
    }
  });
})