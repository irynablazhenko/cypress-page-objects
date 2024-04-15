/// <reference types="cypress" />
import InventoryPage from "../page_objects/InventoryPage"


describe('Inventory tests with POM', () => {

    beforeEach(() => {
        InventoryPage.open();
    })

    it('Burger menu is visible', () => {
        InventoryPage.burgerMenu.should('be.visible');
    })
    
    it('Shopping cart icon is visible', () => {
        InventoryPage.shoppingCartIcon.should('be.visible');
    })

    it('Dropdown menu menu is visible', () => {
        InventoryPage.dropdownItems.should('be.visible');
    })

    it('Dropdown has 4 option', () => {
        InventoryPage.dropdownItem.should('have.length', 4);
    })

    it('Redirect when click on cart icon', () => {
        InventoryPage.clickShoppingCartIcon();
        cy.url().should('eq','https://www.saucedemo.com/cart.html');
    })

})

