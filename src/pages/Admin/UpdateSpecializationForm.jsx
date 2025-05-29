import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateSpecializationById } from "../../redux/apiCalls/specializationApiCall";

const UpdateSpecializationForm = ({specialization,setUpdateSpecialization}) => {
    const [specializationName,setSpecializationName] = useState(specialization.specializationName);
    const [file,setFile] = useState(specialization.specializationPhoto.url);
    const disptach = useDispatch();
    // form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(specializationName.trim()=== "") return toast.error("Specialization Name Required")
        const formData = new FormData();
        formData.append('specializationName', specializationName);
      
        if (file) {
          formData.append('image', file);
        }
        disptach(updateSpecializationById(specialization?._id,formData));
        setUpdateSpecialization(false);
    }
    return ( 
        <div className="update-course">
            
            <form onSubmit={formSubmitHandler} className="update-course-form">
                <abbr title="close" onClick={()=>setUpdateSpecialization(false)}>
                    <img className="update-course-form-close" src="/icons/cancel.png" alt="" />
                </abbr>
            <h1 className="create-course-title">
                Update Specialization
            </h1>
                <input  type="text" 
                placeholder="Specialization Title"
                className="update-course-input"
                value={specializationName}
                onChange={(e)=>setSpecializationName(e.target.value)}
                   />
               
                <label className="update-course-label">Choose A Picture</label>
                <input type="file" name="file"id="file" className="create-course-upload"onChange={(e)=>setFile(e.target.files[0])}/>
                <button type="submit" className="update-course-btn">
                   Update
                </button>
            </form>
        </div>
     );
}
 
export default UpdateSpecializationForm ;