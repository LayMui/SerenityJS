import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/protractor';
import { LogoutPage } from '../pageObjects';

export const Exit = () => 
        Task.where(`#actor exit of the system`,
            Click.on(LogoutPage.profileNavigation),
            Click.on(LogoutPage.signout),
);
