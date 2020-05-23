import React, { memo } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export const AppHeader: React.FC = memo(() => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    color="inherit"
                    component={Link}
                    to="/"
                >
                    Home
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/settings"
                >
                    Settings
                </Button>
            </Toolbar>
        </AppBar>
    );
});
