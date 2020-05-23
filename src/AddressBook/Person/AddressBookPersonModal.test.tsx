import React from "react";
import { shallow } from "enzyme";
import { AddressBookPersonModal, AddressBookPersonModalProps } from "./AddressBookPersonModal";

describe("AddressBook", () => {
    describe("Person", () => {
        describe("AddressBookPersonModal", () => {
            it("renders", () => {
                const props: AddressBookPersonModalProps = {
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
                    isOpen: true,
                    onClose: () => undefined,
                };

                const subject = shallow(<AddressBookPersonModal {...props}/>);

                expect(subject).toMatchSnapshot()
            });
        });
    });
});