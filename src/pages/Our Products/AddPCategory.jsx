import { forwardRef, useContext, useImperativeHandle, useRef, useState, } from "react";
import { createPortal } from "react-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { motion } from 'framer-motion'


const AddCategoryModal = forwardRef(function AddCategoryModal(
    { onClose },
    ref
) {
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
        setAllProducts((prevState) => ({
            ...prevState,
            [newCategory.CategoryName]: { image: newCategory.ImageLink },
        }));
        onClose();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setNewCategory((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return createPortal(
        <motion.dialog
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
                duration: 0.3,
            }}
            ref={addCategoryModalRef}
            onClose={onClose}
            className="modal-class w-full md:w-[50%]"
        >
            <h1 className="text-xl md:text-3xl font-bold mb-4">Add Category</h1>
            <form onSubmit={handleAddProductCategory} className="flex w-full md:w-4/5 flex-col gap-4">
                <div>
                    <label htmlFor="CategoryName" className="modal-input-label">Category Name</label>
                    <input
                        type="text"
                        placeholder="Category Name"
                        name="CategoryName"
                        id="CategoryName"
                        required
                        className="p-2 w-full rounded border"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="ImageLink" className="modal-input-label">Image Link</label>
                    <input
                        type="text"
                        placeholder="Image Link"
                        name="ImageLink"
                        id="ImageLink"
                        required
                        className="p-2 w-full  rounded border"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-center mt-2 gap-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded"
                    >
                        Add
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
        </motion.dialog>,
        document.getElementById("modal")
    );
});

export default AddCategoryModal;
