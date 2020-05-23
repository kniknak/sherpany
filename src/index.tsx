import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./App/theme";
import { store } from "./App/store";

ReactDOM.render(
    <React.StrictMode>
        <App
            store={store}
            theme={theme}
        />
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
