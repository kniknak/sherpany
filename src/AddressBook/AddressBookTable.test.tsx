import React from "react";
import { shallow } from "enzyme";
import { AddressBook } from "./AddressBook";
import { AddressBookTable, AddressBookTableProps } from "./AddressBookTable";
import { FetchAddressBookUser, Status } from "./redux/types";
import { Preloader } from "../UI/Preloader";
import TableBody from "@material-ui/core/TableBody";

describe("AddressBook", () => {
    describe("AddressBookTable", () => {
        const person: FetchAddressBookUser = {
            name: {
                first: "name.first",
                last: "name.last",
            },
            location: {
                street: {
                    name: "location.street.name",
                    number: 1,
                },
                city: "location.city",
                state: "location.state",
                postcode: "location.postcode",
            },
            email: "email",
            login: {
                username: "login.username",
            },
            phone: "phone",
            cell: "cell",
            id: {
                value: "id.value",
            },
            picture: {
                thumbnail: "picture.thumbnail",
            },
        };
        const person2: FetchAddressBookUser = {
            ...person,
            id: {
                value: "id.value2",
            },
        };
        const person3: FetchAddressBookUser = {
            ...person,
            id: {
                value: "id.value2",
            },
        };
        const person4: FetchAddressBookUser = {
            ...person,
            id: {
                value: "id.value2",
            },
        };
        const defaultProps: AddressBookTableProps = {
            search: "",
            scrollThreshold: 0,
            maxPage: 1,
            fetchAddressBook: () => undefined,
            status: Status.Success,
            users: [],
        };

        it("renders", () => {
            const subject = shallow(<AddressBookTable {...defaultProps}/>);

            expect(subject).toMatchSnapshot();
        });

        it("renders loading state", () => {
            const props: AddressBookTableProps = {
                ...defaultProps,
                status: Status.Pending,
            };

            const subject = shallow(<AddressBookTable {...props}/>);

            expect(subject.find(Preloader)).toHaveLength(1);
            expect(subject.find(Preloader)).toMatchSnapshot();
        });

        it("renders end state", () => {
            const props: AddressBookTableProps = {
                ...defaultProps,
                status: Status.Success,
                maxPage: 1,
            };

            const subject = shallow(<AddressBookTable {...props}/>);

            subject.setState({ page: props.maxPage });

            expect(subject.find(Preloader)).toHaveLength(1);
            expect(subject.find(Preloader)).toMatchSnapshot();
        });

        it("renders table", () => {
            const props: AddressBookTableProps = {
                ...defaultProps,
                status: Status.Success,
                users: [
                    [
                        person,
                        person2,
                    ],
                    [
                        person3,
                        person4,
                    ],
                ],
            };

            const subject = shallow(<AddressBookTable {...props}/>);

            subject.setState({ page: props.maxPage });

            expect(subject.find(TableBody)).toMatchSnapshot();
        });
    });
});