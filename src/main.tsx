import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App.tsx";
import { Provider } from "react-redux";
import { store } from "./core/store/index.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
