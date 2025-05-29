import { useState } from "react";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import UpdateCommentModal from "./UpdateCommentModal";
import DateAgo from "../Date/DateAgo";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import { deleteComment, FetchCommentsForSpecificVideo } from "../../redux/apiCalls/commentApiCall";
const CommentList = ({comments}) => {
    const dispatch = useDispatch();
    const [updateComment,setUpdateComment]=useState(false);
    const [comment,setComment]=useState("");
    const {user} = useSelector(state=>state.auth);
    // Delete Comment Handler
    const deleteCommentHandler=async(c)=>{
    const result=await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
            }); 
            if (result.isConfirmed) {
             await  dispatch(deleteComment(c?._id));
               dispatch(FetchCommentsForSpecificVideo(c?.video))
            }
            
    }
    return ( 
        <div className="video-details-comments-wrapper">
        <span className="course-details-videoList">Comment List</span>
        {comments?.length===0?<p>No Comments Yet ..</p>:
        comments?.map(c=>{
            return(
            <div  key={c?._id} className="vedio-details-comment">
                <div className="comment-info">
                <Link to={`/profile/student/${c?.user?._id}`} className="comment-imgae-name">
                <img src={c?.user?.profilePhoto?.url} alt="" />
                <p>{c?.user?.username}</p>
                </Link>
                <span className="date"><DateAgo date={c?.createdAt}/></span>
                </div>
                <div className="comment-content">
                    {c?.content}
                </div>
                {user?._id === c?.user?._id && (<div className="comment-icons">
                <img src="/icons/update.png" onClick={()=>{
                    setUpdateComment(true);
                    setComment(c);
                }} className="icon-update" alt="" />
                <img src="/icons/delete.png" onClick={()=>deleteCommentHandler(c)} className="icon-delete" alt="" />
                </div>)}
                {updateComment && <UpdateCommentModal setUpdateComment={setUpdateComment} comment={comment}/>}

            </div>
            )
        })}
       </div>
     );
}
 
export default CommentList;