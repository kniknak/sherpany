import React from "react";
import { RootState } from "../App/store";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import MuiTextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { Status } from "./redux/types";
import { connect, MapStateToProps } from "react-redux";

const TextField = withStyles(theme => ({
    root: {
        width: 100,
        marginLeft: theme.spacing(2),
    },
}))(MuiTextField);

interface StateProps {
    status: Status
}

interface OwnProps {
    status: Status
    search: string
    setSearch: (search: string) => void
}

export type AddressBookHeaderProps = StateProps & OwnProps

export class AddressBookHeader extends React.PureComponent<AddressBookHeaderProps> {
    private onChange: React.ChangeEventHandler<HTMLInputElement> = event => this.props.setSearch(event.target.value)

    render() {
        const { status, search } = this.props

        return (
            <AppBar position="sticky"
                color="default">
                <Toolbar style={{ alignItems: "baseline" }}>
                    <Typography variant="body1">
                        {Status[status]}
                    </Typography>
                    <Typography
                        variant="body1"
                        style={{ flex: 1 }}
                        align="right"
                    >
                        Search:
                    </Typography>
                    <TextField
                        label="Type text"
                        value={search}
                        onChange={this.onChange}
                        margin="normal"
                        variant="outlined"
                        size="small"
                    />
                </Toolbar>
            </AppBar>
        );
    }
}


const mapStateToProps: MapStateToProps<StateProps, {}, Pick<RootState, "addressBook">> = state => ({
    status: state.addressBook.status,
});

export const AddressBookHeaderConnected = connect(mapStateToProps)(AddressBookHeader);

