import { createContext, useEffect } from "react"
import EMPLOYEES_DATA from "../data/employees";
import { useState } from "react";
import useWeather from "../Hooks/useWeather";
import PRODUCTS from "../data/products";
import useTime from "../Hooks/useTime";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {

    const lat = 30.365771;
    const lon = 76.767454;
    const date = new Date();

    const { finalDate, realTime, timeLoading } = useTime({ date })

    const [allProducts, setAllProducts] = useState(PRODUCTS);

    const [employees, setEmployees] = useState(EMPLOYEES_DATA);
    const { showd, weatherErrorMsg, wloading } = useWeather({ lat, lon });

    const [allBills, setAllBills] = useState([]);
    const [currentBill, setCurrentBill] = useState([]);
    const [totalSales, setTotalSales] = useState(0)

    useEffect(() => {
        const totalSalesCount = Object.values(allBills).reduce((count, crtBill) => {
            return count + crtBill.totalAmount
        }, 0)
        setTotalSales(totalSalesCount);
    }, [allBills])

    return (
        <GlobalContext.Provider value={{
            employees, setEmployees,
            showd, weatherErrorMsg, wloading,
            finalDate, realTime, timeLoading,
            allProducts, setAllProducts,
            allBills, setAllBills, currentBill, setCurrentBill,
            totalSales, setTotalSales
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
