import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/protractor';
import { LoginPage } from '../pageObjects';

export const EnterCredentials = {

    of: (username: string | number, password: string | number) =>
        Task.where(`#actor enters username ${ username } and password ${ password }`,
            Enter.theValue(username).into(LoginPage.usernameInput),
            Enter.theValue(password).into(LoginPage.passwordInput),
            Click.on(LoginPage.loginButton),
        ),
};