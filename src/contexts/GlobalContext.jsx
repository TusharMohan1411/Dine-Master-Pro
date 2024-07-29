import { createContext } from "react"
import EMPLOYEES_DATA from "../data/employees";
import { useState } from "react";
import useWeather from "../Hooks/useWeather";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {

    const [employees, setEmployees] = useState(EMPLOYEES_DATA);

    const lat = 30.365771;
    const lon = 76.767454;

    const { showd, weatherErrorMsg, wloading } = useWeather({ lat, lon });


    return (
        <GlobalContext.Provider value={{
            employees,
            setEmployees,
            showd,
            weatherErrorMsg,
            wloading
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
