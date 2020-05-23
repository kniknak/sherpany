import React from "react";
import { shallow } from "enzyme";
import { AddressBookPersonRow, AddressBookPersonRowProps } from "./AddressBookPersonRow";

describe("AddressBook", () => {
    describe("Person", () => {
        describe("AddressBookPersonRow", () => {
            it("renders", () => {
                const props: AddressBookPersonRowProps = {
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
                    onOpen: () => undefined,
                };

                const subject = shallow(<AddressBookPersonRow {...props}/>);

                expect(subject).toMatchSnapshot()
            });
        });
    });
});