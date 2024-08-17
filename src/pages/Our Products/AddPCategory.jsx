import { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const AddCategoryModal = forwardRef(function AddCategoryModal({ onClose }, ref) {
    const addCategoryModalRef = useRef();
    const [newCategory, setNewCategory] = useState({});
    const { setAllProducts } = useContext(GlobalContext);

    useImperativeHandle(ref, () => ({
        open() {
            addCategoryModalRef.current.showModal();
        },
    }));

    function handleAddProductCategory(event) {
        event.preventDefault();
        setAllProducts((prevState) => (
            {
                ...prevState,
                [newCategory.CategoryName]: { image: newCategory.ImageLink }
            }
        ));
        onClose();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setNewCategory((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return createPortal(
        <dialog ref={addCategoryModalRef} onClose={onClose} className="fixed flex flex-col w-3/5 p-4 mx-auto items-center justify-center
             bg-white bg-opacity-80 my-auto backdrop:bg-black backdrop:bg-opacity-60 backdrop-blur-md rounded-2xl ">
            <h1 className="text-xl font-bold mb-4">Add Category</h1>
            <form onSubmit={handleAddProductCategory} className="flex flex-col gap-4">
                <input type="text" placeholder="Category Name" name="CategoryName" required className="p-2 rounded border" onChange={handleChange} />
                <input type="text" placeholder="Image Link" name="ImageLink" required className="p-2 rounded border" onChange={handleChange} />
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

export default AddCategoryModal;
