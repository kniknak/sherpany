import React from "react";
import { shallow } from "enzyme";
import { Settings, SettingsProps } from "./Settings";
import { Nationality } from "../AddressBook/redux/types";
import FormControlLabel from "@material-ui/core/FormControlLabel";

describe("Settings", () => {
    describe("Settings", () => {
        const defaultProps: SettingsProps = {
            enabledNationalities: new Set<Nationality>(),
            toggleNationality: () => undefined,
        };

        it("renders", () => {
            const subject = shallow(<Settings {...defaultProps}/>);

            expect(subject).toMatchSnapshot();
        });

        it("toggles nationality", () => {
            const props: SettingsProps = {
                ...defaultProps,
                toggleNationality: jest.fn(),
            };

            const subject = shallow(<Settings {...props}/>);

            const event = {
                target: {
                    name: "CF",
                },
            };

            subject.find(FormControlLabel).at(0).prop("control").props.onChange(event);

            expect(props.toggleNationality).toHaveBeenLastCalledWith(event.target.name);
        });
    });
});
