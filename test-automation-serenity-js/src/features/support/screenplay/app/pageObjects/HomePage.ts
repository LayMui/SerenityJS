import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class HomePage {
    static homeLink   = Target.the('home').located(by.css('[data-qa="home-link"]'));
}
