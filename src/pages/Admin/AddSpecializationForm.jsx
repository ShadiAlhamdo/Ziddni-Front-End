import { useState } from "react";
import { toast } from "react-toastify";

const AddSpecializationForm = () => {
     const [specialization,setSpecialization]=useState("");
        const formSubmitHandeler=(e)=>{
            e.preventDefault();
    
            if(specialization.trim()==="") return toast.error("Specialization is required");
    
            console.log(specialization)
        }
    return ( 
        <div className="add-category">
            <h6 className="add-category-title">Add New Specialization</h6>
            <form onSubmit={formSubmitHandeler} >
                <div className="add-category-form-group">
                    <label htmlFor="title">Specialization title</label>
                    <input type="text" id="title" onChange={(e)=>setSpecialization(e.target.value)} placeholder="Enter Specialization Title" />
                </div>
                <button type="submit" className="add-category-btn">
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default AddSpecializationForm;