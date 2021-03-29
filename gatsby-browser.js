import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { navigate } from "gatsby";
import configData from "./env.json";

const onRedirectCallback = (appState) =>
  appState && appState.targetUrl && navigate(appState.targetUrl);

export const wrapRootElement = ({ element }, pluginOptions) => {
  return (
    <Auth0Provider
      domain={configData.GATSBY_AUTH_DOMAIN}
      clientId={configData.GATSBY_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      scope="read:current_user update:current_user_metadata"
    >
      {element}
    </Auth0Provider>
  );
};
