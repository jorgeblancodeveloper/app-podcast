// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from './src/App';
import { Provider } from "react-redux";
import store from "./src/services/redux/store";

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
  
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./src/App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );