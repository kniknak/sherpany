import * as React from "react";
import { FetchAddressBookUser } from "../redux/types";
import { AddressBookPersonRow } from "./AddressBookPersonRow";
import TableRow from "@material-ui/core/TableRow";

import * as styles from "./AddressBookPerson.module.scss"

export interface AddressBookPersonProps {
    person: FetchAddressBookUser
    isShown: boolean
    onOpen: (person: FetchAddressBookUser) => void
}

export class AddressBookPerson extends React.PureComponent<AddressBookPersonProps> {
    private onOpen = () => this.props.onOpen(this.props.person)

    render() {
        const { person, isShown } = this.props;

        return (
            <TableRow className={isShown ? undefined : styles.hidden}>
                <AddressBookPersonRow
                    person={person}
                    onOpen={this.onOpen}
                />
            </TableRow>
        );
    }
}