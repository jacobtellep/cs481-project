import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-s6qumqdd.us.auth0.com"
    clientId="bVDFna4XkNQIW3uOT5dvBgIdI3j0Xy6U"
    redirectUri={window.location.origin}
    audience="http://localhost:5000/"
    scope="view:forms">
    <App />
  </Auth0Provider>,
  document.querySelector('#root')
);
