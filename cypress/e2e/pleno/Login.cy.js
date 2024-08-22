import { email, password } from "../../../environment/stg";
import signUp_pageObjects from "../../support/pageObjects/signUp_pageObjects";
import header_pageObjects from "../../support/pageObjects/header_pageObjects";


describe('Sign In Process', () => {
  beforeEach('Open Browser', () => {
    cy.visit('')
  })

  /**
 * @description aqui nos abstraimos duas chamadas e criamos um método que faz isso
 */
  it('Create a new account', () => {
    header_pageObjects.signIn()
    signUp_pageObjects.createNewAccount()
  });

  it('Login in Account', () => {
    cy.login(email, password)
  });
})