import { useContext, useState, useRef, useEffect } from "react";
import MainHeader from "../../components/Main/MainHeader";
import MainSection from "../../components/Main/MainSection";
import { GlobalContext } from "../../contexts/GlobalContext";
import { FaTimes } from 'react-icons/fa';
import MainData from "../../components/Main/MainData";
import BillModal from "./BillModal";
import { AnimatePresence, motion } from "framer-motion"

export default function Bills() {
    const { allProducts, allBills, setAllBills,
        currentBill, setCurrentBill, finalDate,
        realTime, totalSales, employees } = useContext(GlobalContext);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedBill, setSelectedBill] = useState(null);
    const empReferenceRef = useRef()

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
                time: realTime,
                empReference: empReferenceRef.current.value,
                cancelled: false
            };

            setAllBills(prevState => [...prevState, newBill]);
            setCurrentBill([])
            empReferenceRef.current.value = '';
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

    function handleCancelBill() {
        if (window.confirm('Do you want to cancel this Bill?')) {
            const updatedBills = allBills.map(bill => {
                if (bill.billNo === selectedBill.billNo) {
                    return { ...bill, cancelled: true };
                }
                return bill;
            });
            setAllBills(updatedBills);
            setShowModal(false);
            setSelectedBill(null);
        }
    }

    return (
        <>
            <AnimatePresence>
                {showModal &&
                    <BillModal ref={billModal} bill={selectedBill} onReset={handleClose} cancelBill={handleCancelBill} />
                }
            </AnimatePresence>
            <MainSection>
                <MainHeader PageHeading={'Make Bills'}></MainHeader>
                <MainData>
                    <div className="flex flex-wrap md:flex-row flex-col gap-5 w-full justify-left pr-2 md:pr-5">
                        <div className="w-full md:w-2/5">
                            <form className="bg-white p-3 md:p-6 rounded-lg shadow-md w-full max-w-md mx-auto" onSubmit={handleAddItemInBill}>
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
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Add Item
                                    </motion.button>
                                </div>
                            </form>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="bg-white p-3 md:p-6 rounded-lg shadow-md">
                                <div className="mb-3 flex w-full items-center justify-between">
                                    <div className="text-[14px] md:text-[16px]">
                                        {realTime}
                                    </div>
                                    <div className="font-bold text-[18px] md:text-[22px]">
                                        Bill No: {currentBillIndex}
                                    </div>
                                    <div className="text-[14px] md:text-[16px]">
                                        {finalDate}
                                    </div>
                                </div>
                                <table className="min-w-full bg-white text-center border">
                                    <thead>
                                        <tr>
                                            <th className="border py-3 px-1 text-[14px] md:text-[16px] text-black">Item</th>
                                            <th className="border py-2 px-1 text-[14px] md:text-[16px] text-black">Price</th>
                                            <th className="border py-2 px-1 text-[14px] md:text-[16px] text-black">Qty</th>
                                            <th className="border py-2 px-1 text-[14px] md:text-[16px] text-black">Amount</th>
                                            <th className="border py-4 px-1 text-[14px] md:text-[16px] text-black">Del</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentBill.map((item, index) => (
                                            <tr key={index} >
                                                <td className="border px-1 text-[14px] md:text-[16px] md:px-4 py-2">{item.item}</td>
                                                <td className="border px-1 text-[14px] md:text-[16px] md:px-4 py-2">₹ {item.price}</td>
                                                <td className="border px-1 text-[14px] md:text-[16px] md:px-4 py-2">{item.quantity}</td>
                                                <td className="border px-1 text-[14px] md:text-[16px] md:px-4py-2">₹ {item.amount}</td>
                                                <td className="border px-2  py-2">
                                                    <button onClick={() => handleDeleteItem(index)}>
                                                        <FaTimes className="text-red-500 cursor-pointer" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={3} className="text-right text-black font-semibold py-5">Total Amount:</td>
                                            <td className="text-black font-semibold py-2 md:py-5 text-[14px] md:text-[16px] ">₹ {totalAmount}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="my-4">
                                    <label htmlFor="empReference" className="block text-gray-700 font-bold mb-2">Referred By: </label>
                                    <select
                                        name="empReference"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
                                    rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                                        ref={empReferenceRef}
                                    >
                                        <option value="">
                                            Select Employee
                                        </option>
                                        {employees.map((EMP) => (
                                            <option
                                                key={EMP.name}
                                                value={EMP.name}
                                                className="capitalize"
                                            >
                                                {EMP.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="w-full text-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    type="submit"
                                    onClick={addCurrentBillInAllBills}
                                    className='mt-4 bg-black hover:shadow-md text-white font-bold py-2
                                 px-4 rounded focus:outline-none focus:shadow-outline'
                                >
                                    Submit Bill
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:pr-5 md:pt-5">
                        <h2 className="md:text-4xl text-2xl mt-3 font-bold mb-2 md:mb-4 capitalize text-white w-full text-center bg-[#3952D1] p-2 md:rounded-lg">All Bills</h2>
                        <div className="flex flex-wrap-reverse gap-5 justify-between">
                            <div className="flex justify-center w-full gap-2 md:rounded-lg text-[18px] py-1 md:text-2xl items-center md:w-2/5 bg-black text-white">
                                <h2>Total Revenue:  </h2>
                                <h2 className="text-center font-bold">
                                    ₹ {totalSales}
                                </h2>
                            </div>
                            <table className="grow bg-white text-center border">
                                <thead>
                                    <tr>
                                        <th className="border py-2 text-[14px] md:text-[16px] text-black">Bill No.</th>
                                        <th className="border py-2 text-[14px] md:text-[16px] text-black">Date</th>
                                        <th className="border py-2 text-[14px] md:text-[16px] text-black">Time</th>
                                        <th className="border py-2 text-[14px] md:text-[16px] text-black">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allBills.map((bill, index) => (
                                        <tr key={index} onClick={() => handleShowBillDetails(bill)} className="cursor-pointer hover:bg-cyan-100 hover:font-semibold duration-100 ease-in">
                                            <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>{bill.billNo}</td>
                                            <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>{bill.date}</td>
                                            <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>{bill.time}</td>
                                            <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>₹{bill.totalAmount}</td>
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
