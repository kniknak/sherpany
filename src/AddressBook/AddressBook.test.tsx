import React from "react";
import { shallow } from "enzyme";
import { AddressBook } from "./AddressBook";

describe("AddressBook", () => {
    describe("AddressBook", () => {
        it("renders", () => {
            const subject = shallow(<AddressBook/>);

            expect(subject).toMatchSnapshot()
        });
    });
});