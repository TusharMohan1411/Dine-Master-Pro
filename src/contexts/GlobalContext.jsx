import { createContext, useEffect } from "react"
import EMPLOYEES_DATA from "../data/employees";
import { useState } from "react";
import useWeather from "../Hooks/useWeather";
import PRODUCTS from "../data/products";
import useTime from "../Hooks/useTime";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GlobalState({ children }) {

    const date = new Date();
    const { finalDate, realTime, timeLoading } = useTime({ date })

    const [allProducts, setAllProducts] = useState(PRODUCTS);

    const [employees, setEmployees] = useState(EMPLOYEES_DATA);

    const [cityName, setCityName] = useState();
    const { showd, weatherErrorMsg, wloading, weatherImg } = useWeather({ cityName });

    const [allBills, setAllBills] = useState([]);
    const [currentBill, setCurrentBill] = useState([]);
    const [totalSales, setTotalSales] = useState(0)

    useEffect(() => {
        const activeBills = allBills.filter((bill) => bill.cancelled == false);

        const totalSalesCount = Object.values(activeBills).reduce((count, crtBill) => {

            return count + crtBill.totalAmount
        }, 0)
        setTotalSales(totalSalesCount);
    }, [allBills])

    return (
        <GlobalContext.Provider value={{
            employees, setEmployees,
            showd, weatherErrorMsg, wloading, cityName, setCityName, weatherImg,
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
