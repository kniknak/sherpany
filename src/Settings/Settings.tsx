import React from "react";
import { RootState } from "../App/store";
import { connect, MapStateToProps } from "react-redux";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { addressBookSlice, nationalities } from "../AddressBook/redux/addressBookSlice";
import { Nationality } from "../AddressBook/redux/types";

interface StateProps {
    enabledNationalities: Set<Nationality>
}

interface DispatchProps {
    toggleNationality: (nationality: Nationality) => void
}

export type SettingsProps = StateProps & DispatchProps

export class Settings extends React.PureComponent<SettingsProps> {
    private toggleNationality: React.ChangeEventHandler<HTMLInputElement> = event => this.props.toggleNationality(event.target.name as Nationality);

    render() {
        const { enabledNationalities } = this.props;

        return (
            <Container maxWidth="xs">
                {nationalities.map(nationality => (
                    <FormControlLabel
                        key={nationality}
                        control={<Checkbox
                            checked={enabledNationalities.has(nationality)}
                            onChange={this.toggleNationality}
                            name={nationality}
                        />}
                        label={nationality}
                    />
                ))}
            </Container>

        );
    }
}

const mapStateToProps: MapStateToProps<StateProps, {}, Pick<RootState, "addressBook">> = state => ({
    enabledNationalities: state.addressBook.nationalities,
});

const mapDispatchToProps: DispatchProps = {
    toggleNationality: addressBookSlice.actions.toggleNationality,
};

export const SettingsConnected = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsConnected