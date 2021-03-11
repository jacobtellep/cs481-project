import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-s6qumqdd.us.auth0.com"
    clientId="bVDFna4XkNQIW3uOT5dvBgIdI3j0Xy6U"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.querySelector('#root')
);
