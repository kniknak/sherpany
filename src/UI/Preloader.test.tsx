import React from "react";
import { shallow } from "enzyme";
import { Preloader } from "./Preloader";

describe("Preloader", () => {
    describe("Preloader", () => {
        it("renders", () => {
            const Foo = () => null
            const subject = shallow(<Preloader><Foo/></Preloader>);

            expect(subject).toMatchSnapshot();
        });
    });
});
