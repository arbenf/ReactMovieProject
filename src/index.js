import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "prettier";

//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

import "./styles.css";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
