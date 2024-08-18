import { useEffect, useRef, useState } from 'react';
import EmployeeModal from './EmployeeModal';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';
import MainSection from '../../components/Main/MainSection';
import MainHeader from '../../components/Main/MainHeader';
import MainData from '../../components/Main/MainData';

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

    function handleDeleteEmployee() {
        if (window.confirm('Do you want to delete this Employee?')) {
            const updatedEmployees = employees.filter(empl => empl.name !== currentEmployee.name)
            setEmployees(updatedEmployees)
            setShowEmployeeDialog(false)
            alert('Employee Deleted Successfully.')
        }
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
            <MainSection>
                <MainHeader PageHeading={'Employees'}>
                    <div className='flex flex-col h-4/5 md:flex-row gap-3'>
                        <input
                            onChange={(e) => setSearchedEmployee(e.target.value)}
                            type="text"
                            name="empSearch"
                            id="empSearch"
                            value={searchedEmployee}
                            placeholder='Search Employees'
                            className="px-4 py-2 w-full md:w-56 rounded-xl shadow-sm focus:outline-none duration-200 ease-in focus:shadow-md"
                        />
                        <div className="flex w-full md:w-auto gap-3">
                            <select
                                onChange={(e) => setSelectedFilter(e.target.value)}
                                className="px-2 md:px-4 py-2 w-full md:w-auto rounded-lg shadow-sm text-[14px] md:text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Job Role</option>
                                {uniqueRoles.map((role) => (
                                    <option value={role} key={role}>{role}</option>
                                ))}
                            </select>

                            <button
                                className="bg-black text-white px-4 text-xs md:text-[16px] py-2 w-full md:w-auto rounded-lg"
                                onClick={() => navigate('/employees/addEmployee')}
                            >Add Employee</button>
                        </div>
                    </div>
                </MainHeader>
                <MainData>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:grid-cols-4 xl:grid-cols-5">
                        {filteredEmployees && filteredEmployees.length > 0
                            ? filteredEmployees.map((employee, index) => (
                                <div
                                    onClick={() => handleEmployeePortal(employee)}
                                    key={index}
                                    className="emp-card flex flex-col items-center justify-between 
                                    hover:scale-105 duration-200 shadow-md hover:shadow-lg pb-2 bg-white rounded-xl"
                                >
                                    <div className="empImgCard w-full h-40 md:h-64">
                                        <img src={employee.image} alt={employee.name} className='w-full h-full object-cover object-top rounded-md' />
                                    </div>
                                    <h1 className='text-black text-[16px] md:text-xl font-bold mt-2 text-center'>{employee.name}</h1>
                                    <h2 className='text-center text-[15px] md:text-[18px] '>{employee.role}</h2>
                                </div>
                            ))
                            : <div className='h-[200px] flex flex-col w-full text-center justify-center'>
                                <h1 className='text-3xl font-bold'>Oops! No Employees Found...</h1>
                            </div>
                        }
                    </div>
                </MainData>
            </MainSection>
        </>
    )
}
