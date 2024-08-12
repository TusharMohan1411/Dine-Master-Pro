import { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router-dom";

const AddProductModal = forwardRef(function AddProductModal({ onClose }, ref) {
    const { setAllProducts } = useContext(GlobalContext);
    const AddProductModalRef = useRef();
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
        ingredients: [],
        recipe: [],
    });
    const [ingredient, setIngredient] = useState('');
    const [recipeStep, setRecipeStep] = useState('');
    const { categoryName } = useParams();



    useImperativeHandle(ref, () => ({
        open() {
            AddProductModalRef.current.showModal();
        },
    }));

    function handleChange(e) {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleAddIngredient() {
        setNewProduct((prevState) => ({
            ...prevState,
            ingredients: [...prevState.ingredients, ingredient]
        }));
        setIngredient('');
    }

    function handleAddRecipeStep() {
        setNewProduct((prevState) => ({
            ...prevState,
            recipe: [...prevState.recipe, recipeStep]
        }));
        setRecipeStep('');
    }

    function handleAddNewProduct(e) {
        e.preventDefault();
        const newProductKey = newProduct.name.split(' ').join('');

        setAllProducts((prevState) => ({
            ...prevState,
            [categoryName]: {
                ...prevState[categoryName],
                [newProductKey]: newProduct,
            }
        }));
        console.log(newProduct);
        onClose();
    }

    return createPortal(
        <dialog ref={AddProductModalRef} onClose={onClose} className="fixed flex flex-col w-3/5 p-4 mx-auto items-center justify-center
             bg-white bg-opacity-80 my-auto backdrop:bg-black backdrop:bg-opacity-60 backdrop-blur-md rounded-2xl ">
            <h1 className="text-xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleAddNewProduct} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    value={newProduct.name}
                    className="p-2 rounded border"
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={newProduct.price}
                    className="p-2 rounded border"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Image Link"
                    name="image"
                    value={newProduct.image}
                    className="p-2 rounded border"
                    onChange={handleChange}
                />
                <div>
                    <input
                        type="text"
                        placeholder="Ingredient"
                        value={ingredient}
                        className="p-2 rounded border"
                        onChange={(e) => setIngredient(e.target.value)}
                    />
                    <button
                        type="button"
                        className="px-2 py-1 bg-green-500 text-white rounded ml-2"
                        onClick={handleAddIngredient}
                    >
                        Add Ingredient
                    </button>
                    <ul>
                        {newProduct.ingredients.map((ing, index) => (
                            <li key={index}>{index + 1}. {ing}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Recipe Step"
                        value={recipeStep}
                        className="p-2 rounded border"
                        onChange={(e) => setRecipeStep(e.target.value)}
                    />
                    <button
                        type="button"
                        className="px-2 py-1 bg-green-500 text-white rounded ml-2"
                        onClick={handleAddRecipeStep}
                    >
                        Add Recipe Step
                    </button>
                    <ul>
                        {newProduct.recipe.map((step, index) => (
                            <li key={index}>{index + 1}. {step}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add
                    </button>
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Close</button>
                </div>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default AddProductModal;
