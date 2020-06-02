import { Ensure, endsWith } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, WithStage, Log, See } from '@serenity-js/core';
import { Navigate, Website, isVisible } from '@serenity-js/protractor';
import { Before, Given, Then, When } from 'cucumber';
import {
    Actors,
    EnterCredentials,
    Exit,
} from '../support/screenplay';

import { HomePage } from '../support/screenplay/app/pageObjects';

Before(() => engage(new Actors()));

Given(/(.*) is at the kpo url page/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(
        Navigate.to(''),
    ));

When(/(.*) login with username "(.*)" and password "(.*)"/, (actorName: string, username: string, password: string) =>
actorInTheSpotlight().attemptsTo(
    Log.the(username, password),
    EnterCredentials.of(username, password),
    ));

Then(/^(?:.*) is able to login/, () =>
    actorInTheSpotlight().attemptsTo(
      Ensure.that(Website.title(), endsWith('KCP')),
      Ensure.that(HomePage.homeLink, isVisible()),
      Exit(),
    ));
