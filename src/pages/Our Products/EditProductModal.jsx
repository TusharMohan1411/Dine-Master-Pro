import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router-dom";

const EditProduct = forwardRef(function EditProduct({ onClose, currentProductToEdit }, ref) {
    const editProductDialogRef = useRef();

    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const ingredientsRef = useRef();
    const recipeRef = useRef();
    const { categoryName, productName } = useParams();
    const { allProducts, setAllProducts } = useContext(GlobalContext);

    useImperativeHandle(ref, () => ({
        open() {
            editProductDialogRef.current.showModal();
        },
    }));

    const currentIngredients = currentProductToEdit.ingredients.join(', ')
    const currentRecipe = currentProductToEdit.recipe.join(', ')

    function handleEditProduct(e) {
        e.preventDefault();

        // const { image, ...remainingProducts } = allProducts[categoryName]
        // const cp = Object.entries(remainingProducts).filter(([key, product]) => (
        //     product.name === currentProductToEdit.name
        // ))
        // console.log(cp);

        const editedIngredients = ingredientsRef.current.value.split(', ')
        const editedRecipe = recipeRef.current.value.split(', ')

        setAllProducts(prevState => ({
            ...prevState,
            [categoryName]: {
                ...prevState[categoryName],
                [productName]: {
                    name: nameRef.current.value,
                    price: priceRef.current.value,
                    image: imageRef.current.value,
                    ingredients: editedIngredients,
                    recipe: editedRecipe
                }
            }
        }))

        onClose();
    }

    return createPortal(
        <dialog
            ref={editProductDialogRef}
            onClose={onClose}
            className="fixed flex flex-col w-3/5 p-4 mx-auto items-center justify-center
             bg-white bg-opacity-80 my-auto backdrop:bg-black backdrop:bg-opacity-60 backdrop-blur-md rounded-2xl "
        >
            <h1 className="text-xl font-bold mb-4">Edit Product Details</h1>
            <form onSubmit={handleEditProduct} className="flex w-3/5 flex-col gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    defaultValue={currentProductToEdit.name}
                    ref={nameRef}
                    required
                    className="p-2 rounded border"
                />
                <input
                    type="number"
                    placeholder="Price"
                    name="Price"
                    defaultValue={currentProductToEdit.price}
                    ref={priceRef}
                    required
                    min={1}
                    className="p-2 rounded border"
                />
                <input
                    type="text"
                    placeholder="Image Link"
                    name="ImageLink"
                    defaultValue={currentProductToEdit.image}
                    ref={imageRef}
                    required
                    className="p-2 rounded border"
                />
                <textarea
                    name="ingredients"
                    defaultValue={currentIngredients}
                    ref={ingredientsRef}
                />
                <textarea
                    name="recipe"
                    defaultValue={currentRecipe}
                    ref={recipeRef}
                />

                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                    >
                        Close
                    </button>
                </div>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});

export default EditProduct;
