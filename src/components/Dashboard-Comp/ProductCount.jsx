import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PiHamburgerFill } from "react-icons/pi";

export default function ProductCount() {
    const { allProducts } = useContext(GlobalContext);


    const productsCount = Object.values(allProducts).reduce((count, category) => {
        return count + Object.keys(category).filter(key => key !== 'image').length;
    }, 0);

    return (
        <div className="rounded-lg flex h-full bg-white shadow-md w-full py-4 gap-5 justify-center items-center">
            <div>
                <h1 className="font-bold text-blue-900"><PiHamburgerFill size={50} /></h1>
            </div>
            <div className="flex flex-col justify-center text-left">
                <h1 className="text-[45px] leading-[45px] font-extrabold text-blue-900">{productsCount}</h1>
                <h1 className="text-[20px] leading-[20px] font-bold text-blue-900">Products</h1>
            </div>
        </div>
    );
}
