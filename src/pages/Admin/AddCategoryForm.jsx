import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import { createCtegory } from "../../redux/apiCalls/categoryApiCall";
const AddCategoryForm = () => {
    const dispatch = useDispatch();
    const [title,setTitle]=useState("");
    const formSubmitHandeler=(e)=>{
        e.preventDefault();

        if(title.trim() === "") return toast.error("Title of Category is required");

        dispatch(createCtegory({title}));
        setTitle("");
    }
    return ( 
        <div className="add-category">
            
            <h6 className="add-category-title">Add New Category</h6>
            <form  onSubmit={formSubmitHandeler}>
                <div className="add-category-form-group">
                    <label htmlFor="title">category title</label>
                    <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Category Title" />
                </div>
                <button type="submit" className="add-category-btn">
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default AddCategoryForm;