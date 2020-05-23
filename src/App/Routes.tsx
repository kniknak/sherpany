import React, { memo, lazy } from "react";
import { Route } from "react-router-dom";
import { withPreloader } from "../UI/withPreloader";

const AddressBook = lazy(() => import("../AddressBook/AddressBook"));
const SettingsConnected = lazy(() => import("../Settings/Settings"));

export const Routes: React.FC = memo(() => {
    return (
        <>
            <Route
                path="/"
                exact
                component={withPreloader(AddressBook)}
            />
            <Route
                path="/settings"
                component={withPreloader(SettingsConnected)}
            />
        </>
    );
});
