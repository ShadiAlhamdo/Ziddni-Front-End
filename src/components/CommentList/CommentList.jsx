import { useState } from "react";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import UpdateCommentModal from "./UpdateCommentModal";
import DateAgo from "../Date/DateAgo";
const CommentList = ({comments}) => {
    const [updateComment,setUpdateComment]=useState(false);
    const [comment,setComment]=useState("");
    // Delete Comment Handler
    const deleteCommentHandler=()=>{
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
                Swal.fire({
                title: "Deleted!",
                text: "Comment has been deleted.",
                icon: "success",
                confirmButtonColor: "#040734",
                });
            }else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Something Wrong :)",
                    icon: "error"
                });
                }
            });
    }
    return ( 
        <div className="video-details-comments-wrapper">
        <span className="course-details-videoList">Comment List</span>
        {comments.map(c=>{
            return(
            <div className="vedio-details-comment">
                <div className="comment-info">
                <div className="comment-imgae-name">
                <img src={c.user.profilePhoto.url} alt="" />
                <p>{c.user.username}</p>
                </div>
                <span className="date"><DateAgo date={c.createdAt}/></span>
                </div>
                <div className="comment-content">
                    {c.content}
                </div>
                <div className="comment-icons">
                <img src="/icons/update.png" onClick={()=>{
                    setUpdateComment(true);
                    setComment(c);
                }} className="icon-update" alt="" />
                <img src="/icons/delete.png" onClick={deleteCommentHandler} className="icon-delete" alt="" />
                </div>
                {updateComment && <UpdateCommentModal setUpdateComment={setUpdateComment} comment={comment}/>}

            </div>
            )
        })}
       </div>
     );
}
 
export default CommentList;