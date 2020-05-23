export enum Status {
    Initial = 1,
    Success,
    Pending,
    Failure,
}

export type Nationality = "CH" | "ES" | "FR" | "GB"

export interface AddressBookState {
    status: Status
    users: FetchAddressBookUser[][]
    page: number
    nationalities: Set<Nationality>
}

export interface FetchAddressBookUser {
    name: {
        first: string
        last: string
    }
    location: {
        street: {
            name: string
            number: number
        }
        city: string
        state: string
        postcode: string
    }
    email: string
    login: {
        username: string
    }
    phone: string
    cell: string
    id: {
        value: string
    }
    picture: {
        thumbnail: string
    }
}

export interface FetchAddressBookPayload {
    users: FetchAddressBookUser[]
    page: number
}
