import { useEffect, useState } from "react";
import {Link, useParams , useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import UpdateCourseModal from "./UpdateCourseModal";
import UpdateVideoInfoModal from "./UpdateVideoInfoModal";
import DateChange from "../../components/Date/DateChange";
import {useSelector,useDispatch} from "react-redux";
import { deleteCourse, fetchSingelCourse, ToggelFavoriteSingelCourse, ToggelLikeCourse, ToggelSubscribeSingelCourse, updateCourseImage } from "../../redux/apiCalls/courseApiCall";
import { deleteVideo } from "../../redux/apiCalls/videoApiCall";
const CourseDetails = () => {
    const dispatch = useDispatch();
    const {course} = useSelector(state=>state.course);
    const {user} = useSelector(state=>state.auth);
    const {id}=useParams();
    useEffect(()=>{
        window.scrollTo(0,0);
        dispatch(fetchSingelCourse(id));

    },[id]);

    

    
  
    const [file,setFile]=useState(null);
    const [updateCourse,setUPdateCourse]=useState(false);
    const [updateVideo,setUPdateVideo]=useState(false);
    const [video,setVideo]=useState("");

    // Update Image Submit Handler
    const updateCourseImageSubmit=(e)=>{
        e.preventDefault();
        if(!file) return toast.error("Image File Is Required");
        const formData=new FormData();
        formData.append("image",file);
        dispatch(updateCourseImage(course?._id,formData));
              
    }
    const navigate = useNavigate();
    // Delete Course Handler
    const deleteCourseHandler=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Course!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCourse(course?._id));
                navigate(`/profile/teacher/${user._id}`)

            }
          });
    }
    // Delete Video Handler
    const deleteVideoHandler=(video)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Video!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(video?._id)
              dispatch(deleteVideo(video?._id))
              window.location.reload();
            }
          });
    }

    return ( 
        <section className="course-details">
           <div className="course-details-image-wrapper">
                <img src={course?.image?.url} alt="" className="course-details-image" />
                {user?._id === course?.user?._id && (
                    <form onSubmit={updateCourseImageSubmit} className="update-course-image-form">
                    <label htmlFor="file" className="update-course-label">
                        <img src="/icons/ios-photos.png" alt="" />
                        select new Image
                    </label>
                    <input style={{display:"none"}} type="file" name="file" id="file" onChange={(e)=>setFile(e.target.files[0])} />
                    <button type="submit">upload</button>
                </form>
                )}
           </div>
           <h1 className="course-details-title">
                {course?.title}
           </h1>
           <div className="course-details-user-info">
                <img src={course?.user?.profilePhoto?.url} alt="" className="course-details-user-imgae" />
                <div className="course-details-user">
                    <strong>
                        Teacher Name: <Link to={`/profile/teacher/${course?.user?._id}`}>{course?.user?.username}</Link>
                    </strong>
                    <span><DateChange date={course?.createdAt}/></span>
                </div>
           </div>
           <p className="course-details-description">
                {course?.description}
                
           </p>
           <div className="course-details-icon-wrapper">
                {user && (
                    <div>
                    <img onClick={()=>dispatch(ToggelFavoriteSingelCourse(course?._id))}   src="/icons/favorite.png" alt="favoriteBy" 
                    className={course?.favorites?.includes(user?._id)
                        ? "image-opacity":""
                    }/>
                        <small>{course?.favorites?.length} Favorite</small>
                    <img onClick={()=>dispatch(ToggelLikeCourse(course?._id))} src="/icons/like.png" alt="likes"
                     className={course?.likes?.includes(user?._id)
                        ? "image-opacity":""
                    } />
                        <small>{course?.likes?.length} Like</small>
                    <img onClick={()=>dispatch(ToggelSubscribeSingelCourse(course?._id))} src="/icons/community.ico" alt="subscribers"
                    className={course?.subscribers?.includes(user?._id)
                        ? "image-opacity":""
                    } />
                        <small>{course?.subscribers?.length} subscribers </small>
                </div>
                )}
                {user?._id === course?.user?._id&&(
                    <div>
                    <img src="/icons/update.png" onClick={()=>setUPdateCourse(true)} className="icon-update" alt="" />
                    <img src="/icons/delete.png" onClick={deleteCourseHandler} className="icon-delete" alt="" />
                    </div>
                )}
           </div>
           <div className="course-details-videos-wrapper">
                    <span className="course-details-videoList">Video List</span>
                {course?.videos?.length===0?<p className="Not-Found-p">No Videos Yet</p>:
                course?.videos?.map((v) => (
                            <>
                            <Link  to={`/videos/details/${v._id}?courseId=${id}`} // هنا نمرر كامل الفيديو
                                          className="course-detailse-video" key={v?._id}>
                                <img src={v?.image?.url} className="course-detailse-video-image" alt="" />
                                <p className="course-detailse-video-name">{v?.title}</p>
                            </Link>
                            {user?._id === course?.user?._id&&(<div className="course-details-video-buttons">
                            <img src="/icons/update.png" onClick={() => {
                                        setUPdateVideo(true);
                                        setVideo(v);
                                    }} className="icon-update" alt="" />
                            <img src="/icons/delete.png" onClick={()=>deleteVideoHandler(v)} className="icon-delete" alt="" />
                            </div>)}
                            </>
                            ))}
                   
                
           </div>
           {updateCourse && <UpdateCourseModal setUPdateCourse={setUPdateCourse} course={course}/>}
           {updateVideo && <UpdateVideoInfoModal setUPdateVideo={setUPdateVideo} video={video}/>}
        </section>
     );
}
 
export default CourseDetails;