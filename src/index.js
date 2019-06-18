import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
require('file-loader?name=[name].[ext]!../public/index.html');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react")
);
