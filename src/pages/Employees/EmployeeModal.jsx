/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmployeeModal = forwardRef(function EmployeeModal({ EmployeeDetails, onClose, onDeleteEmployee }, ref) {
    const dialogEmployee = useRef();
    const navigate = useNavigate()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogEmployee.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog
            ref={dialogEmployee}
            className="empModal fixed flex gap-6 w-2/5 p-4 mx-auto justify-between
             bg-white bg-opacity-80 my-auto text-left backdrop:bg-black backdrop:bg-opacity-60 backdrop-blur-md rounded-2xl"
            onClose={onClose}
        >
            <div className="empImgCard w-72 h-96">
                <img src={EmployeeDetails.image} alt={EmployeeDetails.name} className='w-full h-full object-cover rounded-md shadow-xl' />
            </div>

            <div className="flex gap-4 flex-col justify-between flex-1">
                <div className="flex-1">
                    <h1 className='text-black text-3xl font-bold mt-2'>{EmployeeDetails.name}</h1>
                    <h2 className="text-xl text-gray-700 mb-2">{EmployeeDetails.role}</h2>
                    <hr className="w-4/5 border-black" />
                    <p className="mt-3 text-[18px]"><strong>Employee Id : </strong>{EmployeeDetails.id}</p>
                    <p className="text-[18px]"><strong>Salary : </strong> ₹{EmployeeDetails.salary}</p>
                    <p className=" text-[18px]"><strong> Joining Date : </strong>{EmployeeDetails.joiningDate}</p>
                    <p className="text-[18px]"><strong> Address : </strong> {EmployeeDetails.address}</p>
                </div>

                <div className="flex items-center gap-2">
                    <form method="dialog" className="max-w-fit inline-block">
                        <button type="button" onClick={onClose} className="bg-black text-white px-8 py-2 mt-3 rounded-lg hover:scale-105 duration-150 ease-in">Close</button>
                    </form>
                    <button
                        type="button"
                        onClick={() => onDeleteEmployee(EmployeeDetails)}
                        className="px-2 py-2 mt-3 rounded-lg hover:scale-110 duration-150 ease-in"
                    >
                        <MdDelete size={30} />
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/employees/editEmployeeDetails', { state: { employee: EmployeeDetails } })}
                        className="px-2 py-2 mt-3 rounded-lg hover:scale-110 duration-150 ease-in"
                    >
                        <FaEdit size={30} /></button>
                </div>
            </div>
        </dialog>, document.getElementById('modal')
    )
}
)

export default EmployeeModal;