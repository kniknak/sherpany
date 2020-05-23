import React from "react";
import { shallow } from "enzyme";
import { AppHeader } from "./AppHeader";

describe("AppHeader", () => {
    it("renders", () => {
        const subject = shallow(<AppHeader/>);

        expect(subject).toMatchSnapshot();
    });
});
