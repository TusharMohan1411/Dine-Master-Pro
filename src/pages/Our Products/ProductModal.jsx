/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const ProductModal = forwardRef(function ProductModal({ product, onReset }, ref) {
    const dialogProduct = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogProduct.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog
            ref={dialogProduct}
            onClose={onReset}
            className="fixed flex flex-col w-3/5 p-4 mx-auto items-center justify-center
             bg-white bg-opacity-80 my-auto backdrop:bg-black backdrop:bg-opacity-60 backdrop-blur-md rounded-2xl "
        >
            <div className="flex justify-between w-full">
                <div className="p-4">
                    <div className="itemimg w-80 h-64 rounded-xl mb-5">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-xl shadow-2xl" />
                    </div>
                    <div className="p-4">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-2xl font-semibold mt-2">₹ {product.price}</p>
                    </div>
                </div>

                <div className="flex-1 ml-4 p-4">
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
                        <ul className="list-disc pl-5 flex flex-wrap">
                            {product.ingredients.map((ing, index) => (
                                <li key={index} className="mb-1 w-1/2 text-[18px]">{ing}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mt-5 mb-3">Recipe</h2>
                        <div className="scrollable-element overflow-y-auto max-h-48">
                            <ul>
                                {product.recipe.map((step, index) => (
                                    <li key={index} className="mb-3 text-[18px]">{step}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <form method="dialog">
                <button type="button" onClick={onReset} className="bg-black text-white px-8 py-2 mt-3 rounded-lg">Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}
)

export default ProductModal;