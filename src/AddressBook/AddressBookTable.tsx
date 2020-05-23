import React from "react";
import { RootState } from "../App/store";
import { connect, MapStateToProps } from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { AddressBookPerson } from "./Person/AddressBookPerson";
import throttle from "lodash.throttle";
import { fetchAddressBook } from "./redux/fetchAddressBook";
import { FetchAddressBookUser, Status } from "./redux/types";
import { Preloader } from "../UI/Preloader";
import { AddressBookPersonModal } from "./Person/AddressBookPersonModal";

const isPersonShown = (person: FetchAddressBookUser, search: string) => (search === "") || (
    [person.name.first, person.name.last]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
);

interface StateProps {
    users: FetchAddressBookUser[][]
    status: Status
}

interface DispatchProps {
    fetchAddressBook: (page: number) => void
}

interface OwnProps {
    search: string
    scrollThreshold: number
    maxPage: number

}

export type AddressBookTableProps = StateProps & DispatchProps & OwnProps

interface State {
    page: number
    isOpen: boolean
    person?: FetchAddressBookUser
}

export class AddressBookTable extends React.PureComponent<AddressBookTableProps, State> {
    private throttleInterval = 500;

    readonly state: State = {
        page: 1,
        isOpen: false,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        this.fetchResults(this.state.page);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    private onScroll = () => {
        if (this.props.search !== "") {
            return;
        }

        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - this.props.scrollThreshold) {
            if (this.props.status !== Status.Pending) {
                const page = Math.min(this.props.maxPage, this.state.page + 1);
                this.setState({ page });
                this.fetchResults(page);
            }
        }

    };

    private fetchResults = throttle((page: number) => this.props.fetchAddressBook(page), this.throttleInterval);

    private onOpen = (person: FetchAddressBookUser) => this.setState({
        isOpen: true,
        person,
    });

    private onClose = () => this.setState({
        isOpen: false,
        person: undefined,
    });

    private renderPage = (slice: FetchAddressBookUser[], page: number) => (
        <React.Fragment key={page}>
            {slice.map(this.renderPerson)}
        </React.Fragment>
    );

    private renderPerson = (person: FetchAddressBookUser) => (
        <AddressBookPerson
            key={person.id.value}
            person={person}
            isShown={isPersonShown(person, this.props.search)}
            onOpen={this.onOpen}
        />
    );

    render() {
        const { users, maxPage, status } = this.props;
        const { page, isOpen, person } = this.state;

        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>picture.thumbnail</TableCell>
                            <TableCell>name.first</TableCell>
                            <TableCell>name.last</TableCell>
                            <TableCell>name.username</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(this.renderPage)}
                    </TableBody>
                </Table>
                {status === Status.Pending ? (
                    <Preloader>loading...</Preloader>
                ) : (
                    (page === maxPage) && (
                        <Preloader>end of users catalog</Preloader>
                    )
                )}
                <AddressBookPersonModal
                    person={person}
                    isOpen={isOpen}
                    onClose={this.onClose}
                />
            </>
        );
    }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, Pick<RootState, "addressBook">> = state => ({
    users: state.addressBook.users,
    status: state.addressBook.status,
});

const mapDispatchToProps: DispatchProps = {
    fetchAddressBook,
};
export const AddressBookTableConnected = connect(mapStateToProps, mapDispatchToProps)(AddressBookTable);
