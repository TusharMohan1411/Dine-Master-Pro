import { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";

export default function AddEmployee() {
    const { employees, setEmployees } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [newEmployee, setNewEmployee] = useState({
        id: '',
        name: "",
        role: "",
        salary: "",
        image: "",
        joiningDate: "",
    });

    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        });
    };


    function handleInputChange(event) {
        const { name, value } = event.target;

        setNewEmployee((prevState) => ({
            ...prevState,
            [name]: name === 'id' ? empId : value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newId = Math.floor(Math.random() * 100000)
        const empId = 'EMP' + newId

        const formattedEmployee = {
            ...newEmployee,
            joiningDate: formatDate(newEmployee.joiningDate),
            id: empId
        };

        setEmployees([...employees, formattedEmployee]);

        setNewEmployee({
            id: '',
            name: "",
            role: "",
            salary: "",
            image: "",
            joiningDate: "",
        });

        navigate('/employees')
    }


    return (
        <MainSection>
            <MainHeader PageHeading={'Add New Employee'}>
                <div className="flex h-full w-fit items-center">
                    <h1 onClick={() => navigate('/employees')} className="hover:font-semibold hover:scale-105 ease-in duration-75 text-xl cursor-pointer">{'<'}Go Back</h1>
                </div>
            </MainHeader>
            <MainData>
                <div className="w-4/5 mx-auto mt-2 p-8 bg-white shadow-md rounded-lg">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={newEmployee.name}
                            onChange={handleInputChange}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="role"
                            placeholder="Role"
                            value={newEmployee.role}
                            onChange={handleInputChange}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="number"
                            name="salary"
                            placeholder="Salary"
                            value={newEmployee.salary}
                            required
                            min={1}
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
                            type="date"
                            name="joiningDate"
                            placeholder="Joining Date"
                            value={newEmployee.joiningDate}
                            required
                            onChange={handleInputChange}
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={newEmployee.address}
                            onChange={handleInputChange}
                            required
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
            </MainData>
        </MainSection>

    );
}
