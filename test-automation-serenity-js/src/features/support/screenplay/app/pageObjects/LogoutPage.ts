import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class LogoutPage {
    static profileNavigation   = Target.the('profile navigation').located(by.css('[data-qa="nav-profile"]'));
    static signout   = Target.the('signout').located(by.css('[data-qa="signout-link"]'));
}
