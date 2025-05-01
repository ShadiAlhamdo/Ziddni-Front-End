import { useState } from "react";
import {toast,ToastContainer} from "react-toastify";

const CreateVideo = () => {

    const [title,setTitle]=useState("");
    const [courseName,setCourseName]=useState("");
    const [file,setFile]=useState(null);
    
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(title.trim()===""){
            return toast.error(" Video Title Is Required")
        }
        if(courseName.trim()===""){
            return toast.error("  Course Name Is Required")
        }
        if(!file){
            return toast.error(" Video File Is Required")
        }
        const formDate=new FormData();
        formDate.append("video",file);
        formDate.append("title",title);
      // Course Name It is Id Four Course And We Will Sind The Id As Parameter With Params
        console.log(formDate);
    }
    return ( 
        <section className="create-course">
            <ToastContainer theme="colored" position="top-center"/>
            <h1 className="create-course-title">
                Create New Video
            </h1>
            <form onSubmit={formSubmitHandler} className="create-course-form">
                <input  type="text" 
                placeholder="Video Title"
                className="create-course-input"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                   />
                <select className="create-course-input" value={courseName} onChange={(e)=>setCourseName(e.target.value)}>
                    <option value="" disabled>Select A Course</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="language">Language</option>
                </select>
                <label className="create-course-label">Choose A Video</label>
                <input type="file" name="file"id="file" className="create-course-upload"onChange={(e)=>setFile(e.target.files[0])}/>
                <button type="submit" className="create-course-btn">
                    Create
                </button>
            </form>
        </section>
     );
}
 
export default CreateVideo;