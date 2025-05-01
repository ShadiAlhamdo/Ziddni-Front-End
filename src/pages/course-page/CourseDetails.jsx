import { useState } from "react";
import {Link, useParams} from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import UpdateCourseModal from "./UpdateCourseModal";
import UpdateVideoInfoModal from "./UpdateVideoInfoModal";
import DateChange from "../../components/Date/DateChange";
const CourseDetails = () => {
    const courses=[
        {
            id:1,
            title:"New Course",
            description:"Number Test DescriptionFor Test Description,For Test Description,For Test Description ",
            user:{
                username:"Shadi Alhamdo",
                image:"/Images/Teacher.jpg"
            },
            category:"design",
            image:{
                url:"/Images/specializations.jpg",
            },
            likes: [],
            videos: [
                {
                    id:1,
                    title:"vido_1",
                    video:"/Vidos/vido_1.mp4",
                    image:"/Images/ziddny5.webp"
                },
                {
                    id:2,
                    title:"vido_2",
                    video:"/Vidos/vido_1.mp4",
                    image:"/Images/ziddny5.webp"
                },
                {
                    id:3,
                    title:"vido_3",
                    video:"/Vidos/vido_1.mp4",
                    image:"/Images/ziddny5.webp"
                }
            ],
            favoriteBy: [],
            subscribers: [],
            createdAt: "2025-04-22T16:09:09.000Z",
        },
        {
            id:2,
            title:"New Course",
            description:"For Test DescriptionFor Test Description,For Test Description,For Test Description ",
            user:{
                username:"Shadi Alhamdo",
                image:"/Images/Teacher.jpg"
            },
            category:"math",
            image:"/Images/specializations.jpg",
            likes: [],
            videos: [],
            subscribers: [],
            createdAt: "2025-04-22T16:09:09.000Z",
        },
        {
            id:3,
            title:"New Course",
            description:"For Test DescriptionFor Test Description,For Test Description,For Test Description ",
            user:{
                username:"Shadi Alhamdo",
                image:"/Images/Teacher.jpg"
            },
            category:"math",
            image:"/Images/specializations.jpg",
            likes: [],
            videos: [],
            subscribers: [],
            createdAt: "2025-04-22T16:09:09.000Z",
        }];// this List Most We GEt From Backend
    const {id}=useParams();
    const course=courses.find(c=> c.id===parseInt(id));
    const [file,setFile]=useState(null);
    const [updateCourse,setUPdateCourse]=useState(false);
    const [updateVideo,setUPdateVideo]=useState(false);
    const [video,setVideo]=useState("");

    // Update Image Submit Handler
    const updateCourseImageSubmit=(e)=>{
        e.preventDefault();
        if(!file) return toast.error("Image File Is Required");
        console.log(file)
    }
    // Delete Course Handler
    const deleteCourseHandler=()=>{
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
                text: "Course has been deleted.",
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
    // Delete Video Handler
    const deleteVideoHandler=()=>{
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
                text: "Video has been deleted.",
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
        <section className="course-details">
            <ToastContainer theme="colored" position="top-center"/>
           <div className="course-details-image-wrapper">
                <img src={course?.image?.url} alt="" className="course-details-image" />
                <form onSubmit={updateCourseImageSubmit} className="update-course-image-form">
                    <label htmlFor="file" className="update-course-label">
                        <img src="/icons/ios-photos.png" alt="" />
                        select new Image
                    </label>
                    <input style={{display:"none"}} type="file" name="file" id="file" onChange={(e)=>setFile(e.target.files[0])} />
                    <button type="submit">upload</button>
                </form>
           </div>
           <h1 className="course-details-title">
                {course?.title}
           </h1>
           <div className="course-details-user-info">
                <img src={course?.user?.image} alt="" className="course-details-user-imgae" />
                <div className="course-details-user">
                    <strong>
                        Teacher Name: <Link to="/profile/1">{course?.user?.username}</Link>
                    </strong>
                    <span><DateChange date={course?.createdAt}/></span>
                </div>
           </div>
           <p className="course-details-description">
                {course?.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum provident pariatur
                 debitis commodi fuga odio,
                 autem impedit delectus nemo culpa officia sed natus aliquid cumque maxime nostrum,
                 cupiditate optio.
           </p>
           <div className="course-details-icon-wrapper">
                <div>
                    <img src="/icons/favorite.png" alt="favoriteBy"  className="animation"/>
                        <small>{course?.favoriteBy?.length} Favorite</small>
                    <img src="/icons/like.png" alt="likes"className="animation" />
                        <small>{course?.likes?.length} Like</small>
                    <img src="/icons/community.ico" alt="subscribers" className="subscribers" />
                        <small>{course?.subscribers?.length} subscribers </small>
                </div>
                <div>
                    <img src="/icons/update.png" onClick={()=>setUPdateCourse(true)} className="icon-update" alt="" />
                    <img src="/icons/delete.png" onClick={deleteCourseHandler} className="icon-delete" alt="" />
                </div>
           </div>
           <div className="course-details-videos-wrapper">
                    <span className="course-details-videoList">Video List</span>
                {course?.videos?.map((v) => (
                            <>
                            <Link to="/videos/details/1"  className="course-detailse-video" key={v.id}>
                                <img src={v.image} className="course-detailse-video-image" alt="" />
                                <p className="course-detailse-video-name">{v.title}</p>
                            </Link>
                            <div className="course-details-video-buttons">
                            <img src="/icons/update.png" onClick={() => {
                                        setUPdateVideo(true);
                                        setVideo(v);
                                    }} className="icon-update" alt="" />
                            <img src="/icons/delete.png" onClick={deleteVideoHandler} className="icon-delete" alt="" />
                            </div>
                            </>
                            ))}
                   
                
           </div>
           {updateCourse && <UpdateCourseModal setUPdateCourse={setUPdateCourse} course={course}/>}
           {updateVideo && <UpdateVideoInfoModal setUPdateVideo={setUPdateVideo} video={video}/>}
        </section>
     );
}
 
export default CourseDetails;