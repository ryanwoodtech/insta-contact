import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="insta-contact.us.auth0.com"
      clientId="vhhYPZ9kvU00yqC09NSYwNEiEcVbLQX7"
      redirectUri={window.location.origin}
      audience="http://localhost:5001"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
