import { shoppingCartSummary } from "../elementos/shoppingCart.elements";
import { canvaProduct } from "../elementos/product.elements";

class ShoppingSummary {

    validateProductSummaryList(){
        cy.get(shoppingCartSummary.productList).should('have.length', 1)
    }

    addGoCheckoutSymmary(){
        cy.get(shoppingCartSummary.rodapeSummary)
        .find(canvaProduct.btnProceedCheckout)
        .click()
    }
}

export default new ShoppingSummary();