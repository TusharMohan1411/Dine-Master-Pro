import { useEffect, useRef, useState } from 'react';
import EmployeeModal from './EmployeeModal';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function Employees() {

    const { employees, setEmployees } = useContext(GlobalContext);

    const [searchedEmployee, setSearchedEmployee] = useState('');
    const [currentEmployee, setCurrentEmployee] = useState({});
    const [showEmployeeDialog, setShowEmployeeDialog] = useState(false);
    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const [selectedFilter, setSelectedFilter] = useState('');

    const navigate = useNavigate();

    const employeesRef = useRef();

    useEffect(() => {
        function handleFilterbyJobRole() {
            let filterData = employees;
            if (selectedFilter) {
                filterData = filterData.filter(emp =>
                    emp.role.toLowerCase() === selectedFilter.toLowerCase());
            }
            if (searchedEmployee) {
                filterData = filterData.filter(emp =>
                    emp.name.toLowerCase().includes(searchedEmployee.toLowerCase()));
            }
            setFilteredEmployees(filterData);
        }
        handleFilterbyJobRole();
    }, [selectedFilter, searchedEmployee, employees]);

    useEffect(() => {
        setSearchedEmployee('');
    }, [selectedFilter])

    function handleEmployeePortal(emp) {
        setShowEmployeeDialog(true);
        setCurrentEmployee(emp);
    }

    useEffect(() => {
        if (showEmployeeDialog && employeesRef.current) {
            employeesRef.current.open();
        }
    }, [showEmployeeDialog])

    function onClose() {
        setShowEmployeeDialog(false);
    }

    const uniqueRoles = [...new Set(employees.map(emp => emp.role))];

    function handleDeleteEmployee(empl) {
        const updatedEmployees = employees.filter(empl => empl.name !== currentEmployee.name)
        setEmployees(updatedEmployees)
        setShowEmployeeDialog(false)
    }

    return (
        <>
            {showEmployeeDialog &&
                <EmployeeModal
                    EmployeeDetails={currentEmployee}
                    ref={employeesRef}
                    onClose={onClose}
                    onDeleteEmployee={handleDeleteEmployee}
                />
            }
            <section id="employees-section" className="h-full pb-5 flex flex-col">
                <div className="flex justify-between h-14 px-5">
                    <h1 className="text-4xl mt-3 font-bold mb-4">Employees</h1>
                    <div className=''>
                        <input
                            onChange={(e) => setSearchedEmployee(e.target.value)}
                            type="text"
                            name="empSearch"
                            id="empSearch"
                            value={searchedEmployee}
                            placeholder='Search Employees'
                            className="px-4 h-3/4 my-auto rounded-xl shadow-sm focus:outline-none duration-200 ease-in focus:shadow-md mr-5"
                        />
                        <select
                            onChange={(e) => setSelectedFilter(e.target.value)}
                            className="px-4 py-2 rounded-lg shadow-sm focus:outline-none mr-5 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Job Role</option>
                            {uniqueRoles.map((role) => (
                                <option value={role} key={role}>{role}</option>
                            ))}
                        </select>

                        <button
                            className="bg-black text-white px-8 py-2 mt-3 rounded-lg"
                            onClick={() => navigate('/employees/addEmployee')}
                        >Add Employee</button>
                    </div>

                </div>
                <div className="employees-cont-main mt-2 pt-4 px-5 pb-7 flex flex-wrap gap-7 rounded-md overflow-y-scroll overflow-x-hidden cursor-pointer">

                    {filteredEmployees && filteredEmployees.length > 0
                        ? filteredEmployees.map((employee, index) => (
                            // employee.role === 'Waiter' &&
                            <div
                                onClick={() => handleEmployeePortal(employee)}
                                key={index}
                                className="emp-card flex flex-col items-center justify-between 
                    hover:scale-105 duration-200 shadow-md hover:shadow-lg pb-2 bg-white rounded-xl">
                                <div className="empImgCard w-64 h-80">
                                    <img src={employee.image} alt={employee.name} className='w-full h-full object-cover rounded-md' />
                                </div>
                                <h1 className='text-black text-xl font-bold mt-2'>{employee.name}</h1>
                                <h2>{employee.role}</h2>
                            </div>
                        ))
                        : <div className='h-[200px] flex flex-col w-full text-center justify-center'>
                            <h1 className='text-3xl font-bold'>Oops! No Employees Found...</h1>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}