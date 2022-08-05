import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // keep track the store--global state
import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import thunk from "redux-thunk";

import reducers from "./reducers";


import App from "./App";

const store = configureStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);