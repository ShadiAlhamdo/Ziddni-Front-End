import { useState } from "react";
import { toast } from "react-toastify";

const UpdateCourseModal = ({setUPdateCourse,course}) => {

    const [title,setTitle]=useState(course.title);
    const [description,setDescription]=useState(course.description);
    const [category,setCategory]=useState(course.category);
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
        console.log({title,description,category})
    }
    return ( 
        <div className="update-course">
            <form onSubmit={formSubmitHandler}  className="update-course-form">
                <abbr title="close" onClick={()=>setUPdateCourse(false)}>
                    <img className="update-course-form-close" src="/icons/cancel.png" alt="" />
                </abbr>
                <h1 className="update-course-title">Update Course</h1>
                <input type="text" name="" id=""
                 className="update-course-input"
                 value={title} 
                 onChange={(e)=>setTitle(e.target.value)}
                 />
                 <select value={category}  onChange={(e)=>setCategory(e.target.value)} className="update-course-input" >
                    <option value="" disabled>Select A Ctegory</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="language">Language</option>
                </select>
                <textarea rows={5}
                className="update-course-textarea"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                 >
                 </textarea>
                 <button type="submit" className="update-course-btn">Update Course</button>
            </form>
        </div>
     );
}
 
export default UpdateCourseModal;