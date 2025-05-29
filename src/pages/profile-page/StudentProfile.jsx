import { Link, useNavigate, useParams } from "react-router-dom";
import DateChange from "../../components/Date/DateChange";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useEffect, useState } from "react";
import UpdateStudnetProfileModal from "./UpdateStudentProfileModal";
import { toast } from "react-toastify";
import {useDispatch,useSelector} from "react-redux"
import { deleteProfile, getUserCoursesFavorite, getUserCoursesSubscribe, getUserProfile, uploadProfilePhoto } from "../../redux/apiCalls/profileApiCall";
import UpdateQuestionModal from "../community-page/UpdateQuestionModal";
import { ToggelFavoriteCourse, ToggelSubscribeCourse } from "../../redux/apiCalls/courseApiCall";
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import { Oval } from "react-loader-spinner";
const StudentProfile = () => {
    const dispatch=useDispatch();
    const  {id} = useParams();
 

    
    useEffect(()=>{
        dispatch(getUserProfile(id));
        dispatch(getUserCoursesSubscribe());
        dispatch(getUserCoursesFavorite());
        window.scrollTo(0,0);
        
    },[id]);

   const {profile , loading ,isProfileDeleted}=useSelector(state=>state.profile);
   const { user } = useSelector(state => state.auth);

    const coursesSubscribe = useSelector(state => state?.profile?.coursesSubscribe?.courses );
    const coursesFavorite = useSelector(state => state?.profile?.coursesFavorite?.courses );
    const questions = useSelector(state => state?.profile?.profile?.questions);
    const [updateProfile,setUpdateProfile]=useState(false);
    const [updateQuestion,setUpdateQuestion]=useState(false);
    const [question,setQuestion]=useState("");
    const [file, setFile] = useState(null); // الصورة المؤقتة الجديدة

     
    const navigate = useNavigate()
    useEffect(()=>{
       if(isProfileDeleted){
        navigate("/");
       } 
    },[navigate,isProfileDeleted]);

    // تغيير الصورة الشخصية مؤقتًا
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file) {
            
            setFile(file);
        }
    }
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();

        if(!file) return toast.error("No Image Provided");

        const formData=new FormData();
        formData.append("image",file);

        dispatch(uploadProfilePhoto(formData));
    }
    // Delete Quetsion Handler
   const deleteQuetsionHandler=()=>{
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
            text: "Quetsion has been deleted.",
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
   const deleteAccountHandler=()=>{
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
             dispatch(deleteProfile(user?._id))
             dispatch(logoutUser());
            }
          });
    }
    // Loading
    if(loading){
       
            <div className="video-details-video-loading">
                <Oval
            visible={true}
            height="120"
            width="120"
            color="#000"
            ariaLabel="oval-loading"
            secondaryColor="gray"
            wrapperStyle={{}}
            wrapperClass=""
            strokeWidth={3}
            strokeWidthSecondary={3}
            />
            </div>
        
    }
    return ( 
        <section className="profile ">
            <div className="profile-header">
                <div className="profile-image-wrapper">
                <img src={file? URL.createObjectURL(file) :profile?.profilePhoto.url} alt="" className="profile-image" />


                {user?._id === profile?._id &&(
                    <form onSubmit={formSubmitHandler} >
                        <abbr title="choose profile photo">
                        <label htmlFor="file" className="upload-profile-photo-icon">
                        <img src="/icons/ios-photos.png" alt="" />
                        
                        </label>
                        </abbr>
                        <input style={{display:"none"}} type="file" name="file" id="file" onChange={handleImageChange} />
                        <button type="submit" className="upload-profile-photo-btn">Upload</button>
                </form>
                )}
                </div>
                <div className="profile-user-info">
                <h1 className="profile-username">
                    {profile?.username}
                </h1>
                <p className="profile-bio"> Bio :{profile?.bio}</p>

                <div className="user-date-joined">
                    <strong>
                        Date Joined:
                         <span>
                        <DateChange date={profile?.createdAt}/>
                        </span>
                    </strong>
                </div>
                {user?._id === profile?._id && (
                    <button  onClick={()=>setUpdateProfile(true)} className="profile-update-btn">
                <img src="/icons/update.png" className="icon-update" alt="" />
                    Update Profile
                </button>
                )}
                </div>
            </div>
           <div className="profile-courses-list pobular-course">
                <h2 className="profile-course-list-title">
                    Your Subscription Courses:
                </h2>
                <div className="container">
                {coursesSubscribe?.map((c) => (
                    <div className="box" key={c.i_d}>
                        <span className="course-category">{c.category}</span>
                        <div className="box-image">
                        <img src={c.image.url} alt="" />
                        </div>
                        <div className="box-text">
                        <div className="title-date">
                            <h4>{c.title}</h4>
                            <span><DateChange date={c.createdAt}/></span>
                        </div>

                        <p className="description">
                            {c.description}
                        </p>

                        <div className="buttons">
                            <Link to={`/courses/details/${c._id}`} className="readmore-course">
                            Read More...
                            </Link>
                            
                            {user?._id === id && (
                                <button className="delete-course" onClick={()=>dispatch(ToggelSubscribeCourse(c?._id))}>
                                <img className="icon-delete" src="/icons/delete.png" alt="" />
                                Cancel Subscribe
                            </button>
                            )}
                        </div>

                        <div className="flex">
                            <span className="rel">
                            <img src="/icons/community.ico" alt="" />:{c.subscribers.length}
                            </span>
                        </div>
                        </div>
                    </div>
                    ))}
 
                </div>
            </div>
            <div className="profile-courses-list pobular-course">
                <h2 className="profile-course-list-title">
                    Your Favorite Courses:
                </h2>
                <div className="container">
                {coursesFavorite?.map((c) => (
                    <div className="box" key={c._id}>
                        <span className="course-category">{c.category}</span>
                        <div className="box-image">
                        <img src={c.image.url} alt="" />
                        </div>
                        <div className="box-text">
                        <div className="title-date">
                            <h4>{c.title}</h4>
                            <span><DateChange date={c.createdAt}/></span>
                        </div>

                        <p className="description">
                            {c.description}
                        </p>

                        <div className="buttons">
                            <Link to={`/courses/details/${c._id}`} className="readmore-course">
                            Read More...
                            </Link>
                              {user?._id === id && <button className="delete-course" onClick={()=>dispatch(ToggelFavoriteCourse(c?._id))}>
                                <img className="icon-delete" src="/icons/delete.png" alt="" />
                                Cancel Favorite
                            </button>}
                        </div>

                        <div className="flex">
                            <span className="rel">
                            <img src="/icons/community.ico" alt="" />:{c.subscribers.length}
                            </span>
                        </div>
                        </div>
                    </div>
                    ))}
 
                </div>
            </div>
            <div className="community-page">
            <div className="container">
               <h2 className="profile-course-list-title">
                    Your Question:
                </h2>
                  {questions?.map((q)=>(
                        <div className="box">
                        <Link key={q?._id}  to={`/answers/${q?._id}`} className="box">
                        <div className="box-info">
                            <div className="student-info">
                                <img src={profile?.profilePhoto?.url} alt="" />
                                <p className="student-name">
                                student name: {profile?.username}
                                </p>
                            </div>
                            <span className="date"><DateChange date={q?.createdAt}/></span>
                        </div>
                            <div className="box-content">
                                {q?.content}
                            </div>
                        </Link>
                          {user?._id === id && <div className="comment-icons">
                            <img src="/icons/update.png" onClick={()=>{
                                setUpdateQuestion(true);
                                setQuestion(q);
                 }} className="icon-update" alt="" />
                 <img src="/icons/delete.png" onClick={deleteQuetsionHandler} className="icon-delete" alt="" />
                 </div>}
                 </div>
            ))}
            </div>
            </div>
            {user?._id === profile?._id &&<button onClick={deleteAccountHandler} className="profile-delete-btn">
                <img src="/icons/delete.png" className="icon-delete" alt="" />
                    Delete Your Account
            </button>}
            {updateProfile && <UpdateStudnetProfileModal setUpdateProfile={setUpdateProfile}  profile={profile}/>}
            {updateQuestion && <UpdateQuestionModal setUpdateQuestion={setUpdateQuestion} question={question}/>}

        </section>
     );
}
 
export default StudentProfile;