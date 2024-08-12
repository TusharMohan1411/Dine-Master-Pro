import { useContext } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";

export default function ProductDetails() {

    const { categoryName, productName } = useParams();
    const { allProducts } = useContext(GlobalContext);

    const currentProduct = allProducts[categoryName][productName];

    return (
        <MainSection>
            <MainHeader PageHeading={'Product Details'}></MainHeader>

            {currentProduct ?
                <MainData>
                    <div className="flex w-full h-full gap-5 mx-auto  overflow-hidden">

                        <div className="w-2/5">
                            <div className="w-full h-[340px]">
                                <img src={currentProduct.image} alt={currentProduct.name} className="w-full h-full rounded-2xl object-cover shadow-md" />
                            </div>
                            <h1 className="text-[42px] font-bold mt-6 mb-1 capitalize text-gray-800">{currentProduct.name}</h1>
                            <h2 className="text-3xl font-semibold text-gray-600 mb-4">₹ {currentProduct.price}</h2>
                        </div>

                        <div className="flex flex-col w-3/5 ml-5 overflow-y-scroll scrollable-element">

                            <div className="w-full mb-6">
                                <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ingredients</h3>
                                <div className="flex flex-wrap pl-5 h-fit">
                                    {currentProduct.ingredients.map((ing, index) => (
                                        <li key={index} className="text-gray-600 mb-1 text-xl md:w-full lg:w-1/2">{ing}</li>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full">
                                <h3 className="text-3xl font-semibold text-gray-800 mb-2">Recipe</h3>
                                <div className="">
                                    <ul className="list-decimal list-inside pl-4">
                                        {currentProduct.recipe.map((step, index) => (
                                            <li key={index} className="text-gray-600 mb-2 text-xl">{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainData>
                :
                <div className="container mx-auto p-5 text-center">
                    <p className="text-xl font-semibold text-gray-800">Product Details Not Found</p>
                </div>
            }
        </MainSection>
    )
}
