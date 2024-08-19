import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { RiContactsFill } from "react-icons/ri";

export default function EmpCount() {
    const { employees } = useContext(GlobalContext);

    return (
        <div className="rounded-lg flex bg-white shadow-md h-full w-full py-5 gap-5 justify-center items-center">
            <div>
                <h1 className="font-bold text-blue-900"><RiContactsFill size={50} /></h1>
            </div>
            <div className="flex flex-col justify-center text-left">
                <h1 className="text-[45px] leading-[45px] font-extrabold text-blue-900">{employees.length}</h1>
                <h1 className="text-[20px]  leading-[20px] font-bold text-blue-900">Employees</h1>
            </div>
        </div>
    );
}
