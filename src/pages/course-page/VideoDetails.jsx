import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";
import VideoList from "../../components/VideoList/VideoList";
import CommentList from "../../components/CommentList/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingelCourse } from "../../redux/apiCalls/courseApiCall";
import { fetchSingelVideo, updateVideo } from "../../redux/apiCalls/videoApiCall";
import {RotatingLines } from "react-loader-spinner"
import { createComment, FetchCommentsForSpecificVideo } from "../../redux/apiCalls/commentApiCall";

const VideoDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams(); // videoId
    const queryParams = new URLSearchParams(location.search);
    const courseId = queryParams.get("courseId");
    const {course} = useSelector(state=>state.course);
    const {video} = useSelector(state=>state.video);
    const {comments} = useSelector(state=>state.comment.comments);
    const {user} = useSelector(state=>state.auth);

   

    useEffect(()=>{
        dispatch(fetchSingelCourse(courseId));
        dispatch(fetchSingelVideo(id));
        dispatch(FetchCommentsForSpecificVideo(id));
        window.scrollTo(0,0);
    },[courseId,id])

    
    const [isOpen, setIsOpen] = useState(true);

    const toggleList = () => setIsOpen(!isOpen);

    const handleItemClick = () => setIsOpen(false);
    const [content,setContent]=useState("");
    const [file,setFile]=useState(null);
    // Form Comment Handler
    const formCommentHandelr=(e)=>{
            e.preventDefault();
            if(content.trim()===""){
                return toast.error(" Comment  Is Required")
            }
            dispatch(createComment(content,id));
            setContent("");
        }
    // Form Video Handler
    const formVideoHandler=(e)=>{
        e.preventDefault();
        if(!file){
            return toast.error("Video File Is Required")
        }
        console.log(file)
        const formData = new FormData();
        formData.append("video",file);

        dispatch(updateVideo(id,formData));
    }
    
    return ( 
        <section className="video-details">
            <div className="video-details-video-wrapper">
                    {video?.url ? (
                        <video controls className="video-details-video">
                            <source src={video?.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        ) : (
                        <div className="video-details-video-loading">
                            <RotatingLines 
                                        visible={true}
                                        width="75"
                                        color="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        />
                        </div>
                        )}
                {user?._id === course?.user?._id && (
                    <form onSubmit={formVideoHandler} className="update-video-form">
                    <label htmlFor="file" className="update-video-label">
                        <img src="/icons/ios-photos.png" alt="" />
                        select new Video
                    </label>
                    <input style={{display:"none"}} type="file" name="file" id="file" onChange={(e)=>setFile(e.target.files[0])} />
                    <button type="submit">upload</button>
                </form>)}
            </div>
            <h1 className="video-details-title">
                Video Title : <span>{video?.title}</span> 
           </h1>
           <h2  className="video-details-title">
                Course Title : <Link to={`/courses/details/${course?._id}`}>{course?.title}</Link> 
           </h2>
           
           <form onSubmit={formCommentHandelr}  className="comment-form">
                <div className="input-field">
                <label >Add Your Comment</label>
                <input type="text" placeholder="Type here ..." value={content} onChange={(e)=>setContent(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
            <CommentList comments={comments}/> 
           <VideoList toggleList={toggleList} isOpen={isOpen} videos={course?.videos} courseId={courseId} handleItemClick={handleItemClick}/>
        </section>
     );
}
 
export default VideoDetails;