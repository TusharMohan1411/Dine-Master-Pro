/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const BillModal = forwardRef(function BillModal({ bill, onReset }, ref) {
    const dialogBill = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogBill.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog
            ref={dialogBill}
            onClose={onReset}
            className="fixed flex flex-col w-full md:w-2/5 p-4 mx-auto items-center justify-center
             bg-white bg-opacity-80 my-auto backdrop:bg-black backdrop:bg-opacity-60 backdrop-blur-md rounded-2xl "
        >
            <div className="w-full">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-3 flex w-full justify-between">
                        <div>
                            {bill.time}
                        </div>
                        <div className="font-bold text-xl">
                            Bill No: {bill.billNo}
                        </div>
                        <div>
                            {bill.date}
                        </div>
                    </div>
                    <table className="min-w-full bg-white text-center border">
                        <thead>
                            <tr>
                                <th className="border py-2 text-black">Item</th>
                                <th className="border py-2 text-black">Price</th>
                                <th className="border py-2 text-black">Quantity</th>
                                <th className="border py-2 text-black">Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            {bill.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{item.item}</td>
                                    <td className="border px-4 py-2">₹ {item.price}</td>
                                    <td className="border px-4 py-2">{item.quantity}</td>
                                    <td className="border px-4 py-2">₹ {item.amount}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-right text-black font-semibold py-5">Total Amount:</td>
                                <td className="text-black font-semibold py-5">₹ {bill.totalAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <form method="dialog">
                <button type="button" onClick={onReset} className="bg-black text-white px-8 py-2 mt-3 rounded-lg">Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}
)

export default BillModal;






