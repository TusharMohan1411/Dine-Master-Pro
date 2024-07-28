import { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
    const { employees, setEmployees } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [newEmployee, setNewEmployee] = useState({
        name: "",
        role: "",
        salary: "",
        image: "",
        joiningDate: "",
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewEmployee((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        setEmployees([...employees, newEmployee]);

        setNewEmployee({
            name: "",
            role: "",
            salary: "",
            image: "",
            joiningDate: "",
        });

        navigate('/employees')
    }

    return (
        <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Employee</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={newEmployee.role}
                    onChange={handleInputChange}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={newEmployee.salary}
                    onChange={handleInputChange}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newEmployee.image}
                    onChange={handleInputChange}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="joiningDate"
                    placeholder="Joining Date"
                    value={newEmployee.joiningDate}
                    onChange={handleInputChange}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newEmployee.address}
                    onChange={handleInputChange}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="w-full py-3 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
