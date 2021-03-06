import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';

import "./index.css";
import {Provider} from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
