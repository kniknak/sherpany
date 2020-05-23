import { createAction } from "redux-api-middleware";
import { addressBookSlice, nationalities } from "./addressBookSlice";
import { FetchAddressBookPayload, FetchAddressBookUser } from "./types";
import { RootState } from "../../App/store";

export const fetchAddressBook = (page: number) => createAction<Pick<RootState, "addressBook">, Promise<FetchAddressBookPayload>, never>({
    endpoint: state => {
        const nat = [...(state.addressBook.nationalities.size
            ? state.addressBook.nationalities
            : nationalities),
        ]
            .join(",");

        return `https://randomuser.me/api/?seed=sheerpany&page=${page}&results=50&nat=${nat}`;
    },
    method: "GET",
    types: [
        addressBookSlice.actions.request.type,
        {
            type: addressBookSlice.actions.success.type,
            payload: (action, state, response) => (
                response
                    .json()
                    .then<FetchAddressBookPayload>((result: FetchAddressBookResponse) => ({
                        users: result.results,
                        page,
                    }))
            ),
        },
        addressBookSlice.actions.failure.type,
    ],
});

interface FetchAddressBookResponse {
    results: FetchAddressBookUser[]
    info: {
        seed: "sheerpany"
        results: number
        page: number
        version: string
    }
}