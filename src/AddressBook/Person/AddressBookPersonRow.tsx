import * as React from "react";
import TableCell from "@material-ui/core/TableCell";
import { FetchAddressBookUser } from "../redux/types";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

export interface AddressBookPersonRowProps {
    person: FetchAddressBookUser
    onOpen: () => void
}

export class AddressBookPersonRow extends React.PureComponent<AddressBookPersonRowProps> {
    render() {
        const { person, onOpen } = this.props;

        return (
            <>
                <TableCell>
                    <Avatar
                        alt={person.name.first + " " + person.name.last}
                        src={person.picture.thumbnail}
                    />
                </TableCell>
                <TableCell>{person.name.first}</TableCell>
                <TableCell>{person.name.last}</TableCell>
                <TableCell>{person.login.username}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>
                    <IconButton
                        color="inherit"
                        onClick={onOpen}
                    >
                        <MoreIcon/>
                    </IconButton>
                </TableCell>
            </>
        );
    }
}