import { email, password } from "../../../environment/stg";
import productPageObjects from "../../support/pageObjects/product.pageObjects";


/**
 * @description Adicionamos o context para adicionar os steps do nosso teste, assim ao executar podemos ver
 * o nosso vamos Given, When, Then (Dado, Quando, Então)
 */
describe('Shop E2E - Product Page Process', () => {

  before('Given, I Was logged in page', () => {
    cy.visit('')
    cy.login(email, password)
  })


  context('And visiting the product page', () => {

    beforeEach('Visit Product Page', () => {
      cy.visit('?id_product=4&controller=product&search_query=Printed+evening+dress&results=1')
    });

    it('And validate if it is on the dress page', () => {
      productPageObjects.validateIsOnDressPage();
    });

    context('When the product is in stock', () => {

      it('Then allow the user to add the product to the cart', () => {
        const textLabel = "In stock";

        productPageObjects.checkStockAvailability().then((spanText) => {
          if (spanText === textLabel) {
            console.log("Product wasn't in stock");
            productPageObjects.addToCart();
            productPageObjects.validateProductAddedToCart();
          } else {
            console.log("Product was in stock");
            productPageObjects.selectNextAvailableProduct();
            productPageObjects.addToCart();
            productPageObjects.validateProductAddedToCart();
          }
        });
      });
    });

  });
})