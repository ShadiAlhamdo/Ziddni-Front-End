import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {  addNewAnswer, deleteAnswer, getAllAnswersForSpecificQuestion, getAllQuestion } from "../../redux/apiCalls/communityApiCall";
import DateChange from "../../components/Date/DateChange";
import UpdateAnswerModal from "./UpdateAnswerModal";
import DateAgo from "../../components/Date/DateAgo";

const Answers = () => {
    const dispatch=useDispatch();
    const {answers}=useSelector(state=>state.community.answersQes);
    const {id:questionId}=useParams();
    const {questions}=useSelector(state=>state.community);
    const {user} = useSelector(state=>state.auth);
    const question = questions?.find(q => q._id === questionId);
    const [content,setContent]=useState("");
    const [updateAnswer,setUpdateAnswer]=useState(false);
    const [answer,setAnswer]=useState("");



    useEffect(() => {
        dispatch(getAllQuestion());
        dispatch(getAllAnswersForSpecificQuestion(questionId));
        window.scrollTo(0, 0);
      }, [questionId]); 
      
      // Form Submit Handler
    const formAddAnswerHandler=async(e)=>{
        e.preventDefault();

        if(content.trim()==="") return toast.error("The Answe Content Is Required");

        await dispatch(addNewAnswer(content,question?._id));
        setContent("");
      
    }
        // Delete Answer Handler
   const deleteAnswerHandler=(answer)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#040734",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
           dispatch(deleteAnswer(answer));
        } 
        });
}
    return ( <div className="community-page answer-page courses-page">
        <div className="image-title">
           <div className="home-hero-header-layout">
              <h1 className="home-title">
                  Our <span>Community</span>
              </h1>
              <div className="question-box">
                <div className="box-info">
                    <h2 className="question-title">
                        The Question
                    </h2>
                    <div className="student-info">
                        <img src={question?.user?.profilePhoto?.url} alt="" />
                        <p className="student-name">
                        student name : {question?.user?.username} 
                        </p>
                    </div>
                    <span className="date"> <DateChange date={question?.createdAt}/> </span>
                </div>
                <div className="box-content">
                    {question?.content}
                </div>
            </div>
          </div>
        </div>
        <form onSubmit={formAddAnswerHandler} className="community-form">
        <label className="paragraph" >You can add Your Answer Here ...</label>
               <div className="input-field">
                    <input type="text " value={content} onChange={(e)=>setContent(e.target.value)}  placeholder="Type Here ..." />
                    <button type="submit">Add</button>
               </div>
            </form>
       <div className="container">
       <span className="course-details-videoList">Answer List</span>
            {answers?.map((a)=>(
                <div key={a._id} className="box">
                <div className="box-info">
                    <Link  to={`/profile/student/${a?.user?._id}`} className="student-info">
                        <img src={a?.user?.profilePhoto?.url} alt="" />
                        <p className="student-name">
                        student name : {a?.user?.username}
                        </p>
                    </Link>
                    <span className="date"><DateAgo date={a?.createdAt}/></span>
                </div>
                <div className="box-content">
                    {a?.content}
                </div>
                {user?._id === a?.user?._id &&(
                    <div className="comment-icons">
              <img src="/icons/update.png" onClick={()=>{
                  setUpdateAnswer(true);
                  setAnswer(a);
              }} className="icon-update" alt="" />
              <img src="/icons/delete.png" onClick={()=>deleteAnswerHandler(a)} className="icon-delete" alt="" />
              </div>
                )}
            </div>
            ))}
          
       </div>
         {updateAnswer && <UpdateAnswerModal setUpdateAnswer={setUpdateAnswer} answer={answer}/>}
      </div> 
      );
}
 
export default Answers;