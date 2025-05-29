import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import { UpdateComment } from "../../redux/apiCalls/commentApiCall";

const UpdateCommentModal = ({setUpdateComment,comment}) => {
    const disptach = useDispatch();

    const [content,setContent]=useState(comment.content);
    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
      
        if(content.trim()==="") return toast.error("Please Write Something")
            
        disptach(UpdateComment(content,comment?._id,comment?.video));
        setUpdateComment(false)
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
                
                 <button type="submit" className="update-course-btn">Update</button>
            </form>
        </div>
     );
}
 
export default UpdateCommentModal;