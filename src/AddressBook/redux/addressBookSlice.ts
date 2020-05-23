import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressBookState, FetchAddressBookPayload, Nationality, Status } from "./types";

export const nationalities: Nationality[] = ["CH", "ES", "FR", "GB"];

export const addressBookInitialState: AddressBookState = {
    status: Status.Initial,
    users: [],
    page: 1,
    nationalities: new Set(nationalities),
};

export const addressBookSlice = createSlice({
    name: "counter",
    initialState: addressBookInitialState,
    reducers: {
        request: state => {
            state.status = Status.Pending;
        },
        success: (state, action: { payload: FetchAddressBookPayload }) => {
            state.status = Status.Success;
            state.users[action.payload.page - 1] = action.payload.users;
        },
        failure: state => {
            state.status = Status.Failure;
        },
        toggleNationality: {
            reducer: (state, action: PayloadAction<Nationality>) => {
                if (state.nationalities.has(action.payload)) {
                    state.nationalities.delete(action.payload);
                } else {
                    state.nationalities.add(action.payload);
                }
            },
            prepare: (nationality: Nationality) => ({ payload: nationality }),
        },
    },
});