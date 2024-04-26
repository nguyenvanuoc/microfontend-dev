import { Constants } from "shared-components";

export const environment = {
    production: true,
    loginUrl: Constants.SERVICE_IDP_ONEGOV + '/oauth2/authorize',
    logoutUrl: Constants.SERVICE_IDP_ONEGOV + '/oidc/logout',
    callbackURL: Constants.CALLBACK_URL + '/login',
    API_URL: 'http://localhost:4500',
    scope: 'openid',
};
