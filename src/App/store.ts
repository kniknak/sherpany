import { configureStore } from "@reduxjs/toolkit";
import { addressBookSlice } from "../AddressBook/redux/addressBookSlice";
import { apiMiddleware } from "redux-api-middleware";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { enableMapSet } from "immer";

enableMapSet();

export const store = configureStore({
    reducer: { addressBook: addressBookSlice.reducer },
    middleware: [apiMiddleware],
});

export type RootState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
