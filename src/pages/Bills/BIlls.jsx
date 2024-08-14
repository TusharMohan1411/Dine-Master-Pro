import { useContext, useState, useRef, useEffect } from "react";
import MainHeader from "../../components/Main/MainHeader";
import MainSection from "../../components/Main/MainSection";
import { GlobalContext } from "../../contexts/GlobalContext";
import { FaTimes } from 'react-icons/fa';
import { TiEdit } from "react-icons/ti";
import MainData from "../../components/Main/MainData";
import BillModal from "./BillModal";

export default function Bills() {
    const { allProducts, allBills, setAllBills, currentBill, setCurrentBill, finalDate, realTime, totalSales } = useContext(GlobalContext);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedBill, setSelectedBill] = useState(null);

    const [currentItemInBill, setCurrentItemInBill] = useState({
        item: '',
        price: '',
        quantity: '',
        amount: ''
    });

    const initialCategoryProducts = selectedCategory && allProducts[selectedCategory];
    const finalCategoryProducts = { ...initialCategoryProducts };
    delete finalCategoryProducts.image;

    function handleSelectCategory(e) {
        setSelectedCategory(e.target.value);
        setSelectedItem('');
    }

    function handleSelectItem(e) {
        const selectedKey = e.target.value;
        const item = selectedKey ? finalCategoryProducts[selectedKey] : '';
        const itemPrice = item ? item.price : '';
        setSelectedItem(selectedKey);
        setCurrentItemInBill(prevState => ({
            ...prevState,
            item: item.name,
            price: itemPrice,
            amount: itemPrice * prevState.quantity
        }));
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
        const existingItemIndex = currentBill.findIndex(item => item.item === currentItemInBill.item);

        if (existingItemIndex !== -1) {
            const updatedBill = [...currentBill];
            updatedBill[existingItemIndex].quantity = parseFloat(updatedBill[existingItemIndex].quantity) + parseFloat(currentItemInBill.quantity);
            updatedBill[existingItemIndex].amount = updatedBill[existingItemIndex].price * updatedBill[existingItemIndex].quantity;
            setCurrentBill(updatedBill);

        } else {
            setCurrentBill(prevState => [...prevState, currentItemInBill]);
        }

        setCurrentItemInBill({
            item: '',
            price: '',
            quantity: '',
            amount: ''
        });
        setSelectedCategory('');
        setSelectedItem('');
    }

    function handleDeleteItem(index) {
        const updatedBill = currentBill.filter((_, i) => i !== index);
        setCurrentBill(updatedBill);
    }

    const totalAmount = currentBill.reduce((total, item) => total + parseFloat(item.amount), 0);

    const currentBillIndex = allBills.length + 1;

    function addCurrentBillInAllBills() {
        if (currentBill.length !== 0) {
            const newBill = {
                billNo: currentBillIndex,
                items: currentBill,
                totalAmount,
                date: finalDate,
                time: realTime
            };

            setAllBills(prevState => [...prevState, newBill]);
            setCurrentBill([])
        } else {
            alert('Please add some items in bill')
        }
    }

    const billModal = useRef();

    function handleShowBillDetails(bill) {
        setSelectedBill(bill);
        setShowModal(true);
    }

    useEffect(() => {
        if (showModal) {
            billModal.current.open();
        }
    }, [showModal]);

    function handleClose() {
        setShowModal(false);
        setSelectedBill(null);
    }


    return (
        <>
            {showModal &&
                <BillModal ref={billModal} bill={selectedBill} onReset={handleClose} />
            }
            <MainSection>
                <MainHeader PageHeading={'Make Bills'}></MainHeader>
                <MainData>
                    <div className="flex flex-wrap gap-5 w-full justify-left pr-5">
                        <div className="w-full md:w-2/5">
                            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto" onSubmit={handleAddItemInBill}>
                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                                    <select
                                        name="category"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
                                    rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                                        onChange={handleSelectCategory}
                                        value={selectedCategory}
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
                                        value={selectedItem}
                                    >
                                        <option value="">Select Item</option>
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
                                    <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        placeholder="Quantity"
                                        onChange={handleChange}
                                        required
                                        value={currentItemInBill.quantity}
                                        min={1}
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
                                <div className="mb-3 flex w-full justify-between">
                                    <div>
                                        {realTime}
                                    </div>
                                    <div className="font-bold text-xl">
                                        Bill No: {currentBillIndex}
                                    </div>
                                    <div>
                                        {finalDate}
                                    </div>
                                </div>
                                <table className="min-w-full bg-white text-center border">
                                    <thead>
                                        <tr>
                                            <th className="border py-2 text-black">Item</th>
                                            <th className="border py-2 text-black">Price</th>
                                            <th className="border py-2 text-black">Quantity</th>
                                            <th className="border py-2 text-black">Amount</th>
                                            <th className="border py-4 text-black">Del</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentBill.map((item, index) => (
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
                            <div className="w-full text-center">
                                <button onClick={addCurrentBillInAllBills} className='mt-4 bg-black hover:shadow-md hover:scale-110 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit Bill</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pr-5 pt-5">
                        <h2 className="text-4xl mt-3 font-bold mb-4 capitalize text-white w-full text-center bg-[#3952D1] p-2 rounded-lg">All Bills</h2>
                        <div className="flex flex-wrap-reverse gap-5 justify-between">
                            <div className="flex justify-center w-full gap-2 rounded-lg text-2xl items-center md:w-2/5 bg-black text-white">
                                <h2>Total Revenue:  </h2>
                                <h2 className="text-center font-bold">
                                    ₹ {totalSales}
                                </h2>
                            </div>
                            <table className="grow bg-white text-center border">
                                <thead>
                                    <tr>
                                        <th className="border py-2 text-black">Bill No.</th>
                                        <th className="border py-2 text-black">Date</th>
                                        <th className="border py-2 text-black">Time</th>
                                        <th className="border py-2 text-black">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allBills.map((bill, index) => (
                                        <tr key={index} onClick={() => handleShowBillDetails(bill)} className="cursor-pointer">
                                            <td className="border px-4 py-2">{bill.billNo}</td>
                                            <td className="border px-4 py-2">{bill.date}</td>
                                            <td className="border px-4 py-2">{bill.time}</td>
                                            <td className="border px-4 py-2">₹ {bill.totalAmount.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </MainData>
            </MainSection >
        </>

    );
}
