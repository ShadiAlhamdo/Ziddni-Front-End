import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import DateChange from "../../components/Date/DateChange";
import UpdateQuestionModal from "./UpdateQuestionModal";
import {useDispatch,useSelector} from "react-redux"
import { addNewQuestion, deleteQuestion, getAllQuestion, searchQuestions } from "../../redux/apiCalls/communityApiCall";
import DateAgo from "../../components/Date/DateAgo";
const CommunityPage = () => {
    const dispatch = useDispatch();
    const {questions} = useSelector(state=>state.community);
        const {user} = useSelector(state=>state.auth);

    useEffect(()=>{
        dispatch(getAllQuestion());
    },[]);
    const [content,setContent]=useState("");
    const [search,setSearch]=useState("");
   
    const [updateQuestion,setUpdateQuestion]=useState(false);
    const [question,setQuestion]=useState("");
    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
    
        if (content.trim() === "") {
          return toast.error("The Qusetion Content Is Required");
        }
    
        dispatch(addNewQuestion(content));
        setContent("");
      };

    const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

      // البحث أو إعادة تحميل جميع الأسئلة إذا كان الحقل فارغًا
      if (value.trim() !== "") {
        dispatch(searchQuestions(value));
      } else {
        dispatch(getAllQuestion());
      }
    };
       
      
        // Delete Quetsion Handler
   const deleteQuetsionHandler=(question)=>{
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
           dispatch(deleteQuestion(question?._id))
        }
        });
}
    
    return ( 
        <div className="community-page courses-page">
        <div className="image-title">
           <div className="home-hero-header-layout">
              <h1 className="home-title">
                  Our <span>Community</span>
              </h1>
              <p >To get the answers, click on the question.</p>
          </div>
        </div>
        <form onSubmit={formSubmitHandler}  className="community-form">
        <label className="paragraph" >You can search for a question that a student has asked before.</label>
               <div className="input-field">
                    <label htmlFor="search"><img src="/icons/search.png" alt="" /></label>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Type Here For Search ..."
                    />       
                </div>
               <div className="add-question-field">
                <label htmlFor="text">Add Your Question</label>
                <input type="text" name="text" id="text" onChange={(e)=>setContent(e.target.value)} placeholder="Type here please ...." value={content} />
                <button type="submit" className="add-question-btn">Add</button>
               </div>
            </form>
       <div className="container">
            {questions?.map((q)=>(
              <div className="box">
              <div  className="box">
              <div className="box-info">
                  <Link to={`/profile/student/${q?.user?._id}`} className="student-info">
                      <img src={q?.user?.profilePhoto?.url} alt="" />
                      <p className="student-name">
                      student name : {q.user.username}
                      </p>
                  </Link>
                  <span className="date"><DateAgo date={q.createdAt}/></span>
              </div>
              <Link to={`/answers/${q?._id}`} className="box-content">
                 {q.content}
              </Link>
          </div>
          {user?._id === q?.user?._id && (
            <div className="comment-icons">
              <img src="/icons/update.png" onClick={()=>{
                  setUpdateQuestion(true);
                  setQuestion(q);
              }} className="icon-update" alt="" />
              <img src="/icons/delete.png" onClick={()=>deleteQuetsionHandler(q)} className="icon-delete" alt="" />
              </div>
          )}
              </div>
            ))}
            
       </div>
       {updateQuestion && <UpdateQuestionModal setUpdateQuestion={setUpdateQuestion} question={question}/>}

      </div>
     );
}
 
export default CommunityPage;