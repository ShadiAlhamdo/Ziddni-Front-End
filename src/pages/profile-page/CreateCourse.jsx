import { useState } from "react";
import {toast,ToastContainer} from "react-toastify";

const CreateCourse = () => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("");
    const [file,setFile]=useState(null);

    // Form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(title.trim()===""){
            return toast.error(" Course Title Is Required")
        }
        if(description.trim()===""){
            return toast.error(" Course Description Is Required")
        }
        if(category.trim()===""){
            return toast.error(" Course Category Is Required")
        }
        if(!file){
            return toast.error(" Course Image Is Required")
        }
        const formDate=new FormData();
        formDate.append("image",file);
        formDate.append("title",title);
        formDate.append("category",category);
        formDate.append("description",description);
        console.log(formDate);
    }

    return ( 
        <section className="create-course">
            <ToastContainer theme="colored" position="top-center"/>
            <h1 className="create-course-title">
                Create New Course
            </h1>
            <form onSubmit={formSubmitHandler} className="create-course-form">
                <input  type="text" 
                placeholder="Course Title"
                className="create-course-input"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                   />
                <select className="create-course-input" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="" disabled>Select A Ctegory</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="language">Language</option>
                </select>
                <textarea rows={5}
                className="create-course-textarea"
                 placeholder="Course Description"
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                 ></textarea>
                 <label className="create-course-label">Choose A Picture</label>
                <input type="file" name="file"id="file" className="create-course-upload"onChange={(e)=>setFile(e.target.files[0])}/>
                <button type="submit" className="create-course-btn">
                    Create
                </button>
            </form>
        </section>
     );
}
 
export default CreateCourse;