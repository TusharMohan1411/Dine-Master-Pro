import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function EmpCount() {
    const { employees } = useContext(GlobalContext);

    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col h-full w-full p-4 justify-center text-center">
            <h1 className="text-2xl font-bold text-pink-500 mb-2">Total Employees</h1>
            <h1 className="text-5xl font-extrabold text-pink-500">{employees.length}</h1>
        </div>
    );
}
