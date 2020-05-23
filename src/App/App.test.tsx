import React from "react";
import { shallow } from "enzyme";
import { App, AppProps } from "./App";

describe("App", () => {
    it("renders", () => {
        const props: AppProps = {
            theme: {} as any,
            store: {
                subscribe: () => undefined,
                dispatch: () => undefined,
                getState: () => undefined,
            } as any,
        };

        const subject = shallow(<App {...props}/>);

        expect(subject).toMatchSnapshot();
    });
});
