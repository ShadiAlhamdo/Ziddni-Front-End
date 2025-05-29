import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteVideo, fetchAllVideo } from "../../redux/apiCalls/videoApiCall";

const VideosTabel = () => {
    const dispatch = useDispatch();
    const {videosAll:Videos} = useSelector(state=>state.video);
    useEffect(()=>{
        dispatch(fetchAllVideo());
    },[])
    // Delete Video Handler
    const deleteVideoHandler=async (id)=>{
      const result=await  Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Video!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }); 
            if (result.isConfirmed) {
             await dispatch(deleteVideo(id));
             dispatch(fetchAllVideo());
            }
          
    }
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Videos</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Course</th>
                            <th>Video Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Videos.map((item,index)=>(
                            <tr key={item._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <span className="tabel-username">{item?.course?.title}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.title}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={`/videos/details/${item?._id}?courseId=${item?.course?._id}`}>View Video</Link>
                                        </button>
                                        <button onClick={()=>deleteVideoHandler(item?._id)}>
                                            Delete Video
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
 
export default VideosTabel;