import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {  getAllAnswersForSpecificQuestion, updateAnswer } from "../../redux/apiCalls/communityApiCall";

const UpdateAnswerModal = ({setUpdateAnswer,answer}) => {
    const dispatch = useDispatch();
    const [content,setContent]=useState(answer.content);
 
    const formSubmitHandler =async (e) => {
        e.preventDefault();
      
        if(content.trim()==="") return toast.error("Please Write Something")
           
      await  dispatch(updateAnswer(content,answer));
         dispatch( getAllAnswersForSpecificQuestion(answer?.question?._id));
        setUpdateAnswer(false);
    }
    return ( 
        <div className="update-course">
            <form onSubmit={formSubmitHandler}  className="update-course-form">
                <abbr title="close" onClick={()=>setUpdateAnswer(false)}>
                    <img className="update-course-form-close" src="/icons/cancel.png" alt="" />
                </abbr>
                <h1 className="update-course-title">Update Answer</h1>
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
 
export default UpdateAnswerModal;