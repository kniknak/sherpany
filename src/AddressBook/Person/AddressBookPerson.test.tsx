import React from "react";
import { shallow } from "enzyme";
import { AddressBookPerson, AddressBookPersonProps } from "./AddressBookPerson";
import TableRow from "@material-ui/core/TableRow";

import * as styles from "./AddressBookPerson.module.scss"
import { AddressBookPersonRow } from "./AddressBookPersonRow";

describe("AddressBook", () => {
    describe("Person", () => {
        describe("AddressBookPerson", () => {
            const defaultProps: AddressBookPersonProps = {
                person: {
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
                },
                isShown: true,
                onOpen: () => undefined,
            };

            it("renders", () => {
                const subject = shallow(<AddressBookPerson {...defaultProps}/>);

                expect(subject).toMatchSnapshot()
            });

            it("renders hidden", () => {
                const props = {
                    ...defaultProps,
                    isShown: false,
                }
                const subject = shallow(<AddressBookPerson {...props}/>);

                expect(subject.find(TableRow).prop("className")).toBe(styles.hidden)
            });

            it("opens modal", () => {
                const props = {
                    ...defaultProps,
                    onOpen: jest.fn()
                }
                const subject = shallow(<AddressBookPerson {...props}/>);

                subject.find(AddressBookPersonRow).prop("onOpen")()

                expect(props.onOpen).toHaveBeenLastCalledWith(props.person)
            });
        });
    });
});