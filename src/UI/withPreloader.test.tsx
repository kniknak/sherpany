import React from "react";
import { shallow } from "enzyme";
import { withPreloader } from "./withPreloader";

describe("Preloader", () => {
    describe("withPreloader", () => {
        it("renders", () => {
            const Foo = () => null
            const WithPreloader = withPreloader(Foo)
            const subject = shallow(<WithPreloader/>);

            expect(subject).toMatchSnapshot();
        });
    });
});
