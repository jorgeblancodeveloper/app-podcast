// index.js
import React from "react";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/services/redux/store";
import * as ReactDOMClient from "react-dom/client";

const container = document.getElementById("app");

const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);