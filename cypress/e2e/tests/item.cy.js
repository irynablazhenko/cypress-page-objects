/*
Перевірити, що присутні картинка, опис, ціна та назва товару.
Перевірити, що після кліку на "Add to cart" з'являється кнопка Remove
Перевірити, що після кліку на Remove з'являється кнопка Add to Cart
*/
/// <reference types="cypress" />
import ItemPage from "../page_objects/ItemPage"


describe('ItemPage tests with POM', () => {

    beforeEach(() => {
        ItemPage.open();
    })

    it('Item image is visible', () => {
        ItemPage.itemImage.should('be.visible');
    })

    it('Item description is visible', () => {
        ItemPage.itemDescription.should('be.visible');
    })

    it('Item name is visible', () => {
        ItemPage.itemName.should('be.visible');
    })

    it('Item price is visible', () => {
        ItemPage.itemPrice.should('be.visible');
    })

    it('Remove button is shown after click on Add to Cart', () => {
        ItemPage.addItemToCart();
    })

    it('Add to Cart button is shown after click on Remove', () => {
        ItemPage.addItemToCart();
        ItemPage.clickRemoveFromCartButton();
        ItemPage.addToCartButton.should('be.visible');
    })
})