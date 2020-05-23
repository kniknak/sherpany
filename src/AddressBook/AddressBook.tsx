import React, { useState, memo } from "react";
import { AddressBookTableConnected } from "./AddressBookTable";
import { AddressBookHeaderConnected } from "./AddressBookHeader";

const scrollThreshold = 500;
const maxPage = 20;

export const AddressBook: React.FC = memo(() => {
    const [search, setSearch] = useState("");

    return (
        <>
            <AddressBookHeaderConnected
                search={search}
                setSearch={setSearch}
            />
            <AddressBookTableConnected
                search={search}
                scrollThreshold={scrollThreshold}
                maxPage={maxPage}
            />
        </>
    );
});

export default AddressBook;