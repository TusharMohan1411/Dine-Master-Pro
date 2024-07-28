import { useEffect, useRef, useState } from "react";
import PRODUCTS from "../../data/products";
import ProductModal from "./ProductModal";

export default function OurProducts() {

    const [showModal, setShowModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const productDialog = useRef();
    const [searchedItem, setSearchedItem] = useState('')

    function handleViewProduct(currentItem) {
        setShowModal(true);
        setCurrentProduct(currentItem);
    }

    useEffect(() => {
        if (showModal && productDialog.current) {
            productDialog.current.open();
        }
    }, [showModal])

    function handleCloseModal() {
        setShowModal(false);
    }

    let ALL_PRODUCTS = [...PRODUCTS];
    function handleSearchProducts() {
        let searchedProducts = ALL_PRODUCTS.filter(item => item.name.toLowerCase().includes(searchedItem))
        ALL_PRODUCTS = searchedProducts;
    }
    handleSearchProducts();

    return (
        < >
            {showModal && currentProduct &&
                (<ProductModal
                    ref={productDialog}
                    product={currentProduct}
                    onReset={handleCloseModal}
                />)}
            <section id="our-products-section" className="h-full pb-5 flex flex-col">
                <div className="flex justify-between h-14 px-5">
                    <h1 className="text-4xl mt-3 font-bold mb-4">Our Products</h1>
                    <input
                        onChange={(event) => setSearchedItem(event.target.value)}
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search Items"
                        className="px-4 h-3/4 my-auto rounded-xl shadow-sm focus:outline-none duration-200 ease-in focus:shadow-md" />
                </div>

                <div className="products-cont-main mt-2 pt-2 px-5 pb-7 flex flex-wrap gap-7 rounded-md overflow-y-scroll overflow-x-hidden ">

                    {ALL_PRODUCTS.map(item =>
                        <div
                            key={item.name}
                            onClick={() => handleViewProduct(item)}
                            className="product-card flex flex-col cursor-pointer w-64 h-64 bg-white pb-2 
                            rounded-xl drop-shadow-md transition-transform duration-300 hover:scale-105 hover:z-50"
                        >
                            <div className="product-img w-full h-52">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-t-xl" />
                            </div>
                            <div className="product-card-text flex justify-between align-middle p-2">
                                <h2 className="text-xl font-semibold text-black" >{item.name}</h2>
                                <p className="text-green-500 text-xl font-bold">₹ {item.price}</p>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}