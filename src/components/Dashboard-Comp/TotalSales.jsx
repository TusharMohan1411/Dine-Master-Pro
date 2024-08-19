import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { HiCurrencyRupee } from "react-icons/hi2";

export default function TotalSales() {

    const { totalSales } = useContext(GlobalContext);

    return (
        <div className="rounded-lg flex h-full w-full gap-5 p-4 justify-center items-center">
            <div>
                <h1 className="font-bold text-blue-900"><HiCurrencyRupee size={50} /></h1>
            </div>
            <div className="flex flex-col justify-center text-left h-full w-full">
                <h1 className="text-5xl font-extrabold text-blue-900">{totalSales}</h1>
                <h1 className="text-[20px] font-bold text-blue-900">Revenue</h1>
            </div>
        </div>
    )
}