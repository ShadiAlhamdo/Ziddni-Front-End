import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {RotatingLines } from "react-loader-spinner";
import {useSelector,useDispatch } from "react-redux";
import { getUserProfile } from "../../redux/apiCalls/profileApiCall";
import { createVideo } from "../../redux/apiCalls/videoApiCall";

const CreateVideo = () => {
    const dispatch = useDispatch();
    const {loading , isVideoCreated} = useSelector(state=>state.video);
    const {user} = useSelector(state => state.auth);
    const {profile} = useSelector(state=>state.profile);
    const {courses} = profile || "";
    useEffect(()=>{
        dispatch(getUserProfile(user?._id));
    },[user]);


    const [title,setTitle]=useState("");
    const [courseId,setCourseId]=useState("");
    const [file,setFile]=useState(null);
    
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(title.trim()===""){
            return toast.error(" Video Title Is Required")
        }
        if(courseId.trim()===""){
            return toast.error("  Course Name Is Required")
        }
        if(!file){
            return toast.error(" Video File Is Required")
        }
        const formData=new FormData();
        formData.append("video",file);
        formData.append("title",title);
        
        dispatch(createVideo(formData,courseId));
        
    };

     const navigate = useNavigate();
    useEffect(()=>{
        if(isVideoCreated){
            navigate("/");

        }
    },[isVideoCreated,navigate]);

    return ( 
        <section className="create-course">
            <h1 className="create-course-title">
                Create New Video
            </h1>
            <form onSubmit={formSubmitHandler} className="create-course-form">
                <input  type="text" 
                placeholder="Video Title"
                className="create-course-input"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                   />
                <select className="create-course-input" value={courseId} onChange={(e)=>setCourseId(e.target.value)}>
                      <option value="" disabled>Select A Course</option>
                    {courses?.map((c)=>(
                      
                    <option value={c?._id}>{c?.title}</option>
                    ))}
                </select>
                <label className="create-course-label">Choose A Video</label>
                <input type="file" name="file"id="file" className="create-course-upload"onChange={(e)=>setFile(e.target.files[0])}/>
                <button type="submit" className="create-course-btn">
                     {
                        loading ? <RotatingLines
                                        visible={true}
                                        width="40"
                                        color="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        />
                                        : "Create"
                    }
                </button>
            </form>
        </section>
     );
}
 
export default CreateVideo;