import { useContext, useState, useRef } from "react";
import MainHeader from "../../components/Main/MainHeader";
import MainSection from "../../components/Main/MainSection";
import { GlobalContext } from "../../contexts/GlobalContext";
import { FaTimes } from 'react-icons/fa';
import { TiEdit } from "react-icons/ti";

export default function Bills() {
    const { allProducts, allBills, setAllBills, currentBill, setCurrentBill } = useContext(GlobalContext);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const [bill, setBill] = useState([]);
    const [currentItemInBill, setCurrentItemInBill] = useState({
        item: '',
        price: '',
        quantity: '',
        amount: ''
    });

    const categoryRef = useRef();
    const quantityRef = useRef();

    const initialCategoryProducts = selectedCategory && allProducts[selectedCategory];
    const finalCategoryProducts = { ...initialCategoryProducts };
    delete finalCategoryProducts.image;

    function handleSelectCategory(e) {
        setSelectedCategory(e.target.value);
        setSelectedItem('');
    }

    function handleSelectItem(e) {
        const selectedKey = e.target.value;
        const item = finalCategoryProducts[selectedKey];
        const itemPrice = item ? item.price : '';
        setSelectedItem(selectedKey);
        setCurrentItemInBill(prevState => ({
            ...prevState,
            item: item.name,
            price: itemPrice,
            amount: itemPrice * prevState.quantity
        }));


        console.log(item);

    }

    function handleChange(event) {
        const { name, value } = event.target;
        setCurrentItemInBill(prevState => ({
            ...prevState,
            [name]: value,
            amount: name === 'quantity' ? prevState.price * value : prevState.amount
        }));
    }

    function handleAddItemInBill(e) {
        e.preventDefault();
        const existingItemIndex = bill.findIndex(item => item.item === currentItemInBill.item);

        if (existingItemIndex !== -1) {
            const updatedBill = [...bill];
            updatedBill[existingItemIndex].quantity = updatedBill[existingItemIndex].quantity + currentItemInBill.quantity;
            updatedBill[existingItemIndex].amount = updatedBill[existingItemIndex].price * updatedBill[existingItemIndex].quantity;
            setBill(updatedBill);

        } else {
            setBill(prevState => [...prevState, currentItemInBill]);
        }

        setCurrentItemInBill({
            item: '',
            price: '',
            quantity: '',
            amount: ''
        });
        categoryRef.current.value = '';
        quantityRef.current.value = '';
        setSelectedCategory('');
        setSelectedItem('');
    }

    function handleDeleteItem(index) {
        const updatedBill = bill.filter((_, i) => i !== index);
        setBill(updatedBill);
    }

    const totalAmount = bill.reduce((total, item) => total + parseFloat(item.amount), 0);

    return (
        <MainSection>
            <MainHeader PageHeading={'Make Bills'}></MainHeader>
            <MainSection>
                <div className="flex flex-wrap gap-5 justify-left pr-5 pt-5">
                    <div className="w-full md:w-2/5">
                        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto" onSubmit={handleAddItemInBill}>
                            <div className="mb-4">
                                <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                                <select
                                    name="category"
                                    ref={categoryRef}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
                                    rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                                    onChange={handleSelectCategory}
                                >
                                    <option value="">Select Category</option>
                                    {Object.entries(allProducts).map(([key]) => (
                                        <option
                                            key={key}
                                            value={key}
                                            className="capitalize"
                                        >
                                            {key}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="Item" className="block text-gray-700 font-bold mb-2">Item</label>
                                <select
                                    name="Item"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                                    onChange={handleSelectItem}
                                    required
                                >
                                    {!selectedCategory && <option value="">Select Item</option>}
                                    {selectedCategory && Object.entries(finalCategoryProducts).map(([key, item]) => (
                                        <option
                                            key={key}
                                            value={key}
                                            className="capitalize"
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price ₹</label>
                                <input
                                    type="number"
                                    name="price"
                                    readOnly
                                    value={currentItemInBill.price}
                                    placeholder="Price"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="quantity" ref={quantityRef} className="block text-gray-700 font-bold mb-2">Quantity</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Quantity"
                                    onChange={handleChange}
                                    required
                                    value={currentItemInBill.quantity}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Add Item
                                </button>
                            </div>
                        </form>
                    </div>

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
                                    {bill.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{item.item}</td>
                                            <td className="border px-4 py-2">₹ {item.price}</td>
                                            <td className="border px-4 py-2">{item.quantity}</td>
                                            <td className="border px-4 py-2">₹ {item.amount}</td>
                                            <td className="border px-2  py-2">
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
                </div>
            </MainSection>
        </MainSection>
    );
}
