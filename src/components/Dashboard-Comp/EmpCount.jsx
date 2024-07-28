import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function EmpCount() {
    const { employees } = useContext(GlobalContext);

    return (
        <div className="flex flex-col items-center justify-center h-full p-4 bg-pink-400 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-white mb-2">Total Employees</h1>
            <h1 className="text-4xl font-extrabold text-white">{employees.length}</h1>
        </div>
    );
}
