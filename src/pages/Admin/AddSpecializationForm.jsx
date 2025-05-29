import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import { createSpecialization } from "../../redux/apiCalls/specializationApiCall";
const AddSpecializationForm = () => {
    const dispatch = useDispatch()
     const [specializationName,setSpecializationName]=useState("");
        const formSubmitHandeler=(e)=>{
            e.preventDefault();
    
            if(specializationName.trim()==="") return toast.error("Specialization is required");
    
           dispatch(createSpecialization({specializationName}))
           setSpecializationName("");
        }
    return ( 
        <div className="add-category">
            <h6 className="add-category-title">Add New Specialization</h6>
            <form onSubmit={formSubmitHandeler} >
                <div className="add-category-form-group">
                    <label htmlFor="title">Specialization title</label>
                    <input type="text" id="title" value={specializationName} onChange={(e)=>setSpecializationName(e.target.value)} placeholder="Enter Specialization Title" />
                </div>
                <button type="submit" className="add-category-btn">
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default AddSpecializationForm;