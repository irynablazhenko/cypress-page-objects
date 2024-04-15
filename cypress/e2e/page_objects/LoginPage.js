/// <reference types="cypress" />
import BasePage from "./BasePage";

class LoginPage extends BasePage {


    get userNameField() {
        return cy.get('[data-test="username"]');
    }

    get passwordField() {
        return cy.get('[data-test="password"]');
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    open() {
        super.open('');
    }

    login(userName, password) {
        this.userNameField.type(userName);
        this.passwordField.type(password);
        this.loginButton.click();
    }

}

export default new LoginPage();