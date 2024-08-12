import { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

export default function TotalSales() {

    const { totalSales } = useContext(GlobalContext);


    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col h-full w-full justify-center p-4 text-center">
            <h1 className="text-3xl font-bold text-red-500 mb-2">TotalSales</h1>
            <h1 className="text-6xl font-extrabold text-red-500">₹ {totalSales}</h1>
        </div>
    )
}