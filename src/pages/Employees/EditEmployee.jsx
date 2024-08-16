import { useLocation, useNavigate } from "react-router-dom";
import MainData from "../../components/Main/MainData";
import MainHeader from "../../components/Main/MainHeader";
import MainSection from "../../components/Main/MainSection";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


export default function EditEmployeeDetails() {
    const { employees, setEmployees } = useContext(GlobalContext);
    const location = useLocation()
    const currentEmpForEdit = location.state?.employee || {}
    const navigate = useNavigate()

    const idRef = useRef()
    const nameRef = useRef()
    const roleRef = useRef()
    const salaryRef = useRef()
    const imageRef = useRef()
    const joiningDateRef = useRef()
    const addressRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        const updatedEmployee = {
            id: idRef.current.value,
            name: nameRef.current.value,
            role: roleRef.current.value,
            salary: salaryRef.current.value,
            image: imageRef.current.value,
            joiningDate: joiningDateRef.current.value,
            address: addressRef.current.value,
        }

        const updatedEmployeesList = employees.map(emp =>
            emp.id === updatedEmployee.id ? updatedEmployee : emp
        );

        setEmployees(updatedEmployeesList);
        navigate('/employees');
    }

    console.log(currentEmpForEdit.joiningDate);

    function handleBack(e) {
        navigate('/employees')
    }


    return (
        <>
            <MainSection>
                <MainHeader PageHeading={'Edit Employee Details'}>
                    <div className="flex h-full w-fit items-center">
                        <h1 onClick={handleBack} className="hover:font-semibold hover:scale-105 ease-in duration-75 text-xl cursor-pointer">{'<'}Go Back</h1>
                    </div>
                </MainHeader>
                <MainData>
                    <div className="w-4/5 mx-auto p-8 mt-3 bg-white shadow-md rounded-lg">
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="id"
                                placeholder="Id"
                                defaultValue={currentEmpForEdit.id}
                                ref={idRef}
                                required
                                readOnly
                                className="px-4 py-2 border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                defaultValue={currentEmpForEdit.name}
                                ref={nameRef}
                                required
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="text"
                                name="role"
                                placeholder="Role"
                                defaultValue={currentEmpForEdit.role}
                                ref={roleRef}
                                required
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="number"
                                name="salary"
                                placeholder="Salary"
                                defaultValue={currentEmpForEdit.salary}
                                ref={salaryRef}
                                required
                                min={1}
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="text"
                                name="image"
                                defaultValue={currentEmpForEdit.image}
                                ref={imageRef}
                                placeholder="Image URL"
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="text"
                                name="joiningDate"
                                placeholder="Joining Date"
                                defaultValue={currentEmpForEdit.joiningDate}
                                ref={joiningDateRef}
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                defaultValue={currentEmpForEdit.address}
                                ref={addressRef}
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
        </>
    )
}
