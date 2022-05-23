import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(reducers, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
