import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function ProductCount() {
    const { allProducts } = useContext(GlobalContext);


    const productsCount = Object.values(allProducts).reduce((count, category) => {
        return count + Object.keys(category).filter(key => key !== 'image').length;
    }, 0);

    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col h-full w-full p-4 justify-center text-center">
            <h1 className="text-2xl font-bold text-purple-500 mb-2">Total Products</h1>
            <h1 className="text-5xl font-extrabold text-purple-500">{productsCount}</h1>
        </div>
    );
}
