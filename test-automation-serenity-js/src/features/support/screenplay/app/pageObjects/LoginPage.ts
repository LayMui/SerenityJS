import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class LoginPage {
    static usernameInput     = Target.the('username input').located(by.id('username'));
    static passwordInput     = Target.the('password input').located(by.id('password'));
    static loginButton    = Target.the('login button').located(by.css('[data-qa="login-btn"]'));
}
