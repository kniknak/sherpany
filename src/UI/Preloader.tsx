import React, {memo} from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

export const Preloader: React.FC = memo(({ children }) => {
    return (
        <Toolbar>
            <Typography
                align="center"
                style={{ flex: 1 }}
            >
                {children}
            </Typography>
        </Toolbar>
    );
});