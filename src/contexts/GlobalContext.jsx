import { createContext } from "react"
import EMPLOYEES_DATA from "../data/employees";
import { useState } from "react";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {

    const [employees, setEmployees] = useState(EMPLOYEES_DATA);
    const [showd, setShowd] = useState({
        cityName: '',
        temp: '',
        maxTemp: '',
        minTemp: '',
        humidity: '',
        description: '',
    });

    return (
        <GlobalContext.Provider value={{
            employees,
            setEmployees,
            showd,
            setShowd
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
