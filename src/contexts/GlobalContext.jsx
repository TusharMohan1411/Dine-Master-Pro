import { createContext, useEffect } from "react"
import EMPLOYEES_DATA from "../data/employees";
import { useState } from "react";
import useWeather from "../Hooks/useWeather";
import PRODUCTS from "../data/products";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {

    const lat = 30.365771;
    const lon = 76.767454;

    const [allProducts, setAllProducts] = useState(PRODUCTS);

    const [employees, setEmployees] = useState(EMPLOYEES_DATA);
    const { showd, weatherErrorMsg, wloading } = useWeather({ lat, lon });

    const [allBills, setAllBills] = useState([]);
    const [currentBill, setCurrentBill] = useState([])

    const lt = allBills.length - 1;
    useEffect(() => {
        console.log(allBills);

        console.log(allBills[lt]);
    }, [allBills])


    return (
        <GlobalContext.Provider value={{
            employees, setEmployees,
            showd, weatherErrorMsg, wloading,
            allProducts, setAllProducts,
            allBills, setAllBills, currentBill, setCurrentBill
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
