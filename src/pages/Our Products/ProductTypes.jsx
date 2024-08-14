import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";
import AddProductModal from "./AddProduct";
import { FaPlus } from "react-icons/fa";


export default function ProductTypes() {
    const { categoryName } = useParams();
    const { allProducts } = useContext(GlobalContext);
    const navigate = useNavigate();

    const initialCategoryProducts = allProducts[categoryName];
    const finalCategoryProducts = { ...initialCategoryProducts }
    delete finalCategoryProducts.image;

    const [showAddProductModal, setShowAddProductModal] = useState(false);

    const addProductModal = useRef();

    function openAddProductModal() {
        setShowAddProductModal(true);
    }

    useEffect(() => {
        if (showAddProductModal) {
            addProductModal.current.open();
        }
    }, [showAddProductModal])

    function handleClose() {
        setShowAddProductModal(false);
    }


    return (
        <>
            {showAddProductModal &&
                <AddProductModal ref={addProductModal} onClose={handleClose} />
            }
            <MainSection>
                <MainHeader PageHeading={categoryName}>
                    <input
                        // onChange={(event) => setSearchedItem(event.target.value)}
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search Items"
                        className="px-4 h-3/4 my-auto rounded-xl shadow-sm focus:outline-none duration-200 ease-in focus:shadow-md"
                    />
                </MainHeader>

                <MainData>
                    {Object.keys(finalCategoryProducts).length > 0 ? (
                        Object.entries(finalCategoryProducts).map(([key, value]) => (
                            <div
                                key={key}
                                onClick={() => navigate(`/ProductsCategories/${categoryName}/${key}`)}
                                className="flex flex-col cursor-pointer w-64 h-64 bg-white pb-2 
                            rounded-xl drop-shadow-md transition-transform duration-300 hover:scale-105 hover:z-50"
                            >
                                <div className="w-full h-52">
                                    <img src={value.image} alt={value.name} className="w-full h-full shadow-md object-cover rounded-t-xl" />
                                </div>
                                <div className="mt-2 flex justify-between align-middle text-center  p-2">
                                    <h1 className="text-xl font-semibold">{value.name}</h1>
                                    <p className="text-md text-gray-600">{value.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available in this category.</p>
                    )}
                    <div
                        onClick={openAddProductModal}
                        className="flex items-center justify-center cursor-pointer w-64 h-64 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex flex-col items-center justify-center text-blue-900 border-[3px] border-blue-800 rounded-lg h-full w-full text-4xl">
                            <FaPlus />
                            <span className="mt-2 text-lg font-semibold">Add Product</span>
                        </div>
                    </div>
                </MainData>
            </MainSection>
        </>
    );
}
