import { createContext } from "react"
import EMPLOYEES_DATA from "../data/employees";
import { useState } from "react";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {

    const [employees, setEmployees] = useState(EMPLOYEES_DATA);

    return (
        <GlobalContext.Provider value={{
            employees,
            setEmployees
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
