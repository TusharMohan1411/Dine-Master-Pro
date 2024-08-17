import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";

export default function ProductDetails() {

    const { categoryName, productName } = useParams();
    const { allProducts, setAllProducts } = useContext(GlobalContext);
    const navigate = useNavigate();

    const currentProduct = allProducts[categoryName][productName];

    function handleDeleteProduct() {
        const { image, ...remainingProducts } = allProducts[categoryName]

        const updatedProducts = Object.entries(remainingProducts)
            .filter(([key, product]) => product.name !== currentProduct.name)
            .reduce((acc, [key, product]) => {
                acc[key] = product;
                return acc
            }, {})

        console.log(updatedProducts);

        setAllProducts(prevState => ({
            ...prevState,
            [categoryName]: {
                image,
                ...updatedProducts
            }
        }));

        navigate(`/ProductsCategories/${categoryName}`)
    }

    return (
        <MainSection>
            <MainHeader PageHeading={'Product Details'}>
                <div className="flex h-full w-fit items-center text-gray-500">

                    <h1 onClick={() => navigate(`/ProductsCategories`)}
                        className="hover:font-semibold ease-in duration-100 text-[18px] cursor-pointer capitalize"
                    >
                        {`All Categories >`}
                    </h1>
                    <h1 onClick={() => navigate(`/ProductsCategories/${categoryName}`)}
                        className="hover:font-semibold ease-in duration-100 text-[18px]  cursor-pointer capitalize"
                    >
                        {`> ${categoryName} >`}
                    </h1>
                    <span className="duration-75 text-[18px]  capitalize">{`> ${currentProduct.name}`}</span>
                </div>
            </MainHeader>

            {currentProduct ?
                <MainData>
                    <div className="flex w-full h-full gap-5 mx-auto  overflow-hidden">

                        <div className="w-2/5">
                            <div className="w-full h-[340px]">
                                <img src={currentProduct.image} alt={currentProduct.name} className="w-full h-full rounded-2xl object-cover shadow-md" />
                            </div>
                            <h1 className="text-[42px] font-bold mt-6 mb-1 capitalize text-gray-800">{currentProduct.name}</h1>
                            <h2 className="text-3xl font-semibold text-gray-600 mb-4">₹ {currentProduct.price}</h2>
                            <div className="flex w-full gap-2 justify-between ">
                                <button type="button" className="px-4 py-2 w-full bg-gray-500 text-white rounded">Edit</button>
                                <button type="button" onClick={handleDeleteProduct} className="px-4 py-2 w-full bg-gray-500 text-white rounded">Delete Product</button>
                            </div>
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
