import * as React from "react";
import { FetchAddressBookUser } from "../redux/types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiTypography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const Typography = withStyles(theme => ({
    root: {
        margin: theme.spacing(2),
    },
}))(MuiTypography);

export interface AddressBookPersonModalProps {
    person?: FetchAddressBookUser
    isOpen: boolean
    onClose: () => void
}

export class AddressBookPersonModal extends React.PureComponent<AddressBookPersonModalProps> {
    render() {
        const { person, isOpen, onClose } = this.props;

        return (
            <Dialog
                maxWidth="sm"
                fullWidth
                onClose={onClose}
                open={isOpen}
            >
                {person && (
                    <>
                        <DialogTitle>{person.login.username}</DialogTitle>
                        <Typography>location.street.name: {person.location.street.name}</Typography>
                        <Typography>location.street.number: {person.location.street.number}</Typography>
                        <Typography>location.city: {person.location.city}</Typography>
                        <Typography>location.state: {person.location.state}</Typography>
                        <Typography>location.postcode: {person.location.postcode}</Typography>
                        <Typography>phone: {person.phone}</Typography>
                        <Typography>cell: {person.cell}</Typography>
                    </>
                )}
            </Dialog>
        );
    }
}