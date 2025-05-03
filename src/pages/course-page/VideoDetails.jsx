import { useState } from "react";
import { Link } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import VideoList from "../../components/VideoList/VideoList";
import CommentList from "../../components/CommentList/CommentList";

const VideoDetails = () => {
    const course={
        
        id:1,
        title:"New Course",
        description:"For Test DescriptionFor Test Description,For Test Description,For Test Description ",
        user:{
            username:"Shadi Alhamdo",
            image:"/Images/Teacher.jpg"
        },
        category:"math",
        image:"/Images/specializations.jpg",
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
    };
    const video=
        {
            _id: "6807d43721d8f38d6b405f60",
            title: "Video_1",
            url: "/Videos/video_1.mp4",
            publicId: "jdajblrrem20er1auogx",
            image: {
                url: "https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_1280.jpg",
                publicId: null
            },
            createdAt: "2025-04-22T17:39:03.946Z"
    };

    const comments= [
            {
                _id: "680bb80f4463f32df989b409",
                content: "Shadi Comment",
                user: {
                    _id: "67bb963f1868ccec7f382bbe",
                    username: "shadi",
                    profilePhoto: {
                        url: "https://media.istockphoto.com/id/1389898082/de/foto/s%C3%BC%C3%9Fer-junge-ikonischer-charakter-mit-brille-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=cOl9XSWvShItbtNwlZabaVpW2TQ7Yljx0t-LSaRm4x4=",
                        publicId: null
                    },
                    id: "67bb963f1868ccec7f382bbe"
                },
                video: "6807d43721d8f38d6b405f60",
                createdAt: "2025-04-25T16:27:59.817Z",
                updatedAt: "2025-04-25T16:27:59.817Z",
                
            },
            {
                "_id": "680bb7024463f32df989b3fb",
                content: "Shadi Comment",
                user: {
                    _id: "67bb963f1868ccec7f382bbe",
                    username: "shadi",
                    profilePhoto: {
                        url: "https://media.istockphoto.com/id/1389898082/de/foto/s%C3%BC%C3%9Fer-junge-ikonischer-charakter-mit-brille-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=cOl9XSWvShItbtNwlZabaVpW2TQ7Yljx0t-LSaRm4x4=",
                        publicId: null
                    },
                    id: "67bb963f1868ccec7f382bbe"
                },
                video: "6807d43721d8f38d6b405f60",
                createdAt: "2025-04-25T16:27:59.817Z",
                updatedAt: "2025-04-25T16:27:59.817Z",
            }
    ];
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => setIsOpen(!isOpen);

    const handleItemClick = () => setIsOpen(false);
    const [comment,setComment]=useState("");
    const [file,setFile]=useState(null);
    const formCommentHandelr=(e)=>{
            e.preventDefault();
            if(comment.trim()===""){
                return toast.error(" Comment  Is Required")
            }
            console.log("sadasdasd")
        }
    const formVideoHandler=(e)=>{
        e.preventDefault();
        if(!file){
            return toast.error("Video File Is Required")
        }
    }
    
    return ( 
        <section className="video-details">
            <ToastContainer theme="colored" position="top-center"/>
            <div className="video-details-video-wrapper">
                <video  controls className="video-details-video">
                    <source src={video.url} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <form onSubmit={formVideoHandler} className="update-video-form">
                    <label htmlFor="file" className="update-video-label">
                        <img src="/icons/ios-photos.png" alt="" />
                        select new Video
                    </label>
                    <input style={{display:"none"}} type="file" name="file" id="file" onChange={(e)=>setFile(e.target.files[0])} />
                    <button type="submit">upload</button>
                </form>
            </div>
            <h1 className="video-details-title">
                Video Title : <span>{video.title}</span> 
           </h1>
           <h2 to={`/courses/details/${course.id}`} className="video-details-title">
                Course Title : <Link to={`/courses/details/${course.id}`}>{course.title}</Link> 
           </h2>
           
           <form onSubmit={formCommentHandelr}  className="comment-form">
                <div className="input-field">
                <label >Add Your Comment</label>
                <input type="text" placeholder="Type here ..." value={comment} onChange={(e)=>setComment(e.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form>
            <CommentList comments={comments}/> 
           <VideoList toggleList={toggleList} isOpen={isOpen} videos={course.videos} handleItemClick={handleItemClick}/>
        </section>
     );
}
 
export default VideoDetails;