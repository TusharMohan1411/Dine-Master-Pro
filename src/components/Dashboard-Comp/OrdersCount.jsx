import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { TbChecklist } from "react-icons/tb";

export default function OrdersCount() {

    const { allBills } = useContext(GlobalContext);

    return (
        <div className="rounded-lg flex h-full w-full gap-1 md:gap-3 p-1 md:p-4 justify-center items-center">
            <div>
                <h1 className="font-bold text-4xl md:text-7xl text-blue-900"><TbChecklist /></h1>
            </div>
            <div className="flex flex-col justify-center text-left h-full w-full">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">0{allBills.length}</h1>
                <h1 className="text-15px md:text-[20px] font-bold text-blue-900">Orders</h1>
            </div>
        </div>
    )
}