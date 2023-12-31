import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6itv3434ixdiyjt7.us.auth0.com"
      clientId="KUtjUcZGZHTcEzU0fH9kPaI4g2KMSR1H"
      authorizationParams={{
        redirect_uri: "https://full-stack-real-estate-roan.vercel.app",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
