import { useState } from 'react';
import PRODUCTS from './../../data/products';

export default function Bills() {

    const [addedItem, setAddedItem] = useState({
        item: '',
        qty: '',
        price: '',
        amount: '',
    })

    const [totalItems, setTotalItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);


    function handleChangeInItem(event) {
        const { name, value } = event.target;
        setAddedItem(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    function handleAddProductinBill(e) {
        e.preventDefault();

        const amount = addedItem.qty * addedItem.price;

        const newItem = {
            ...addedItem,
            amount,
        }

        setTotalItems(prevState => ([...prevState, newItem]))
        setTotalAmount(prevAmount => prevAmount + amount)
    }

    return (
        <section id="bills-section" className="h-full pb-5 flex flex-col">
            <div className="fixed w-full z-30 h-14">
                <h1 className="text-4xl fixed mt-3 font-bold mb-4">Bills Maker</h1>
            </div>
            <div className="bills-cont-main mt-20 flex flex-wrap gap-7 rounded-md overflow-y-scroll ">

                {/* To make Bills */}
                <div id="bill-make" className='flex flex-col bg-white p-6 rounded-lg shadow-md w-1/2 max-w-md mx-auto'>
                    <h1 className="text-2xl font-bold mb-4">Add Items</h1>
                    <div id="bill-form" className='flex flex-col'>
                        <form className='flex flex-col gap-4' onSubmit={handleAddProductinBill}>
                            <div>
                                <label htmlFor='item' className="block text-gray-700 font-medium mb-1">Item</label>
                                <select onChange={handleChangeInItem} id="item" name="item" className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
                                    <option value="">Select Item</option>
                                    {PRODUCTS.map(product => (
                                        <option key={product.name} value={product.name}>{product.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div id="qty">
                                <label htmlFor='qty' className="block text-gray-700 font-medium mb-1">Quantity</label>
                                <input onChange={handleChangeInItem} type="number" name="qty" id="qty" className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded leading-tight focus:outline-none focus:border-blue-500" />
                            </div>
                            <div id="price">
                                <label htmlFor='price' className="block text-gray-700 font-medium mb-1">Price</label>
                                <input onChange={handleChangeInItem} type="number" name="price" id="price" className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded leading-tight focus:outline-none focus:border-blue-500" />
                            </div>
                            <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Item</button>
                        </form>
                    </div>
                </div>

                {/* To Show Bills */}
                <div id="bill-make" className='flex flex-col bg-white p-6 rounded-lg shadow-md w-1/2 max-w-md mx-auto'>
                    <h1 className="text-2xl font-bold mb-4">Final Bill</h1>
                    <div className="billedItem overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-left text-gray-700 font-semibold">Item</th>
                                    <th className="py-2 px-4 border-b text-center text-gray-700 font-semibold">Price</th>
                                    <th className="py-2 px-4 border-b text-center text-gray-700 font-semibold">Qty</th>
                                    <th className="py-2 px-4 border-b text-center text-gray-700 font-semibold">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* isme total items ki array se data aaega */}
                                {totalItems.map(item => (
                                    <tr key={item.item} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b text-gray-700">{item.item}</td>
                                        <td className="py-2 px-4 border-b text-center text-gray-700">₹ {item.price}</td>
                                        <td className="py-2 px-4 border-b text-center text-gray-700">{item.qty}</td>
                                        <td className="py-2 px-4 border-b text-center text-gray-700">₹ {item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h1 className="text-xl font-bold mt-4">Total Amount: ₹ {totalAmount}</h1>
                </div>

            </div>
        </section >
    )
}