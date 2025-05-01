import { useState } from "react";
import { toast } from "react-toastify";

const UpdateCommentModal = ({setUpdateComment,comment}) => {
    const [content,setContent]=useState(comment.content);

    const formSubmitHandler = (e) => {
        e.preventDefault();
      
        if(content.trim()==="") return toast.error("Please Write Something")
            
        console.log(content)
    }
    return ( 
        <div className="update-course">
            <form onSubmit={formSubmitHandler}  className="update-course-form">
                <abbr title="close" onClick={()=>setUpdateComment(false)}>
                    <img className="update-course-form-close" src="/icons/cancel.png" alt="" />
                </abbr>
                <h1 className="update-course-title">Update Comment</h1>
                <input type="text" name="" id=""
                 className="update-course-input"
                 value={content} 
                 onChange={(e)=>setContent(e.target.value)}
                 />
                
                 <button type="submit" className="update-course-btn">Update Course</button>
            </form>
        </div>
     );
}
 
export default UpdateCommentModal;