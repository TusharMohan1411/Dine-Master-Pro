

export default function BillCard() {
    return (
        <>
            <div className="w-full md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <table className="min-w-full bg-white text-center border">
                        <thead>
                            <tr>
                                <th className="border py-2 text-black">Item</th>
                                <th className="border py-2 text-black">Price</th>
                                <th className="border py-2 text-black">Quantity</th>
                                <th className="border py-2 text-black">Amount</th>
                                <th className="border pl-3 py-4 text-black "><TiEdit size={25} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentBill.map((item, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{item.item}</td>
                                    <td className="border px-4 py-2">₹ {item.price}</td>
                                    <td className="border px-4 py-2">{item.quantity}</td>
                                    <td className="border px-4 py-2">₹ {item.amount}</td>
                                    <td className="border px-2 py-2">
                                        <button onClick={() => handleDeleteItem(index)}>
                                            <FaTimes className="text-red-500 cursor-pointer" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-right text-black font-semibold py-5">Total Amount:</td>
                                <td className="text-black font-semibold py-5">₹ {totalAmount.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}