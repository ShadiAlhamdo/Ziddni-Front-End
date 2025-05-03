import { useState } from "react";
import { toast } from "react-toastify";

const AddCategoryForm = () => {
    const [category,setCategory]=useState("");
    const formSubmitHandeler=(e)=>{
        e.preventDefault();

        if(category.trim()==="") return toast.error("Category is required");

        console.log(category)
    }
    return ( 
        <div className="add-category">
            
            <h6 className="add-category-title">Add New Category</h6>
            <form  onSubmit={formSubmitHandeler}>
                <div className="add-category-form-group">
                    <label htmlFor="title">category title</label>
                    <input type="text" id="title" onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Category Title" />
                </div>
                <button type="submit" className="add-category-btn">
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default AddCategoryForm;