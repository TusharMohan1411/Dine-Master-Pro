import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";
import AddCategoryModal from "./AddPCategory";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function ProductsCategories() {
    const { allProducts } = useContext(GlobalContext);
    const [showModal, setShowModal] = useState(false);
    const addCategoryModal = useRef();
    const navigate = useNavigate();

    function openAddCategoryModal() {
        setShowModal(true);
    }

    useEffect(() => {
        if (showModal) {
            addCategoryModal.current.open();
        }
    }, [showModal])

    function handleClose() {
        setShowModal(false);
    }

    return (
        <>
            {showModal &&
                <AddCategoryModal ref={addCategoryModal} onClose={handleClose} />
            }

            <MainSection>
                <MainHeader PageHeading={'Our Product Categories'}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search Items"
                        className="px-4 h-3/4 my-auto rounded-xl shadow-sm focus:outline-none duration-200 ease-in focus:shadow-md"
                    />
                </MainHeader>

                <MainData>
                    {Object.entries(allProducts).map(([key, category]) => (
                        <div
                            key={key}
                            onClick={() => navigate(`/ProductsCategories/${key}`)}
                            className="product-card flex flex-col cursor-pointer w-64 h-64 bg-white pb-2 
                                rounded-xl drop-shadow-md transition-transform duration-300 hover:scale-105 hover:z-50"
                        >
                            <div className="product-img w-full h-52">
                                <img src={category.image} alt={key} className="w-full h-full shadow-md object-cover rounded-t-xl" />
                            </div>
                            <div className="product-card-text flex justify-between align-middle text-center p-2">
                                <h2 className="text-xl font-semibold text-black capitalize w-full">{key}</h2>
                            </div>
                        </div>
                    ))}
                    <div
                        onClick={openAddCategoryModal}
                        className="flex items-center justify-center cursor-pointer w-64 h-64 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex flex-col items-center justify-center text-blue-900 border-[3px] border-blue-800 rounded-lg h-full w-full text-4xl">
                            <FaPlus />
                            <span className="mt-2 text-lg font-semibold">Add Category</span>
                        </div>
                    </div>
                </MainData>
            </MainSection>

        </>
    );
}
