import React from "react";
import { shallow } from "enzyme";
import { AddressBookHeader, AddressBookHeaderProps } from "./AddressBookHeader";
import { Status } from "./redux/types";

describe("AddressBook", () => {
    describe("AddressBookHeader", () => {
        it("renders", () => {
            const props: AddressBookHeaderProps = {
                search: "search",
                setSearch: () => undefined,
                status: Status.Success,
            };

            const subject = shallow(<AddressBookHeader {...props}/>);

            expect(subject).toMatchSnapshot();
        });
    });
});