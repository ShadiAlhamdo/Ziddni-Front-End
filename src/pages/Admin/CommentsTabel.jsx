import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useEffect } from "react";
import { deleteComment, getAllComments } from "../../redux/apiCalls/commentApiCall";

const CommentsTabel = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state=>state.comment);
    useEffect(()=>{
        dispatch(getAllComments());
    },[])
    // Delete Comment Handler
    const deleteCommentHandler= async(id,video)=>{
    const result=await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Comment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          });
            if (result.isConfirmed) {
             await dispatch(deleteComment(id,video));
              dispatch(getAllComments());
            }
          
    }
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Comments</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User Name</th>
                            <th>Course Title</th>
                            <th>Video Title</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments?.map((item,index)=>(
                            <tr key={item?._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <span className="tabel-username">{item?.user?.username}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.video?.course?.title}
                                </td>
                                <td>
                                {item?.video?.title}
                                </td>
                                <td>
                                {item?.content}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                       
                                        <button onClick={()=>deleteCommentHandler(item?._id,index?.video?._id)}>
                                            Delete Comment
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
     );
}
 
export default CommentsTabel;