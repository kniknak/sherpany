import React from "react";
import { MuiThemeProvider, Theme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { store } from "./store";
import { Switch, BrowserRouter } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { Routes } from "./Routes";

export interface AppProps {
    theme: Theme
    store: typeof store
}

export class App extends React.PureComponent<AppProps> {
    render() {
        const { store, theme } = this.props;

        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <BrowserRouter>
                        <AppHeader/>
                        <Switch>
                            <Routes/>
                        </Switch>
                    </BrowserRouter>
                </MuiThemeProvider>
            </Provider>
        );
    }
}