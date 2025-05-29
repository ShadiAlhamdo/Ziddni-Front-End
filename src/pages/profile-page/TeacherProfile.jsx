import { Link, useParams , useNavigate} from "react-router-dom";
import DateChange from "../../components/Date/DateChange";
import { useEffect, useState } from "react";
import UpdateTeacherProfileModal from "./UpdateTeacherProfileModal";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile, getUserProfile, uploadProfilePhoto } from "../../redux/apiCalls/profileApiCall";
import {Oval} from "react-loader-spinner"
import { logoutUser } from "../../redux/apiCalls/authApiCall";
const TeacherProfile = () => {
    const dispatch=useDispatch();
    const  {id} = useParams();
    const {profile , loading , isProfileDeleted}=useSelector(state=>state.profile);
    const { user } = useSelector(state => state.auth);
    const [file, setFile] = useState(null); 
    const [updateProfile,setUpdateProfile]=useState(false);

    useEffect(()=>{
        dispatch(getUserProfile(id));
        window.scrollTo(0,0);
        
    },[id]);
    
    
    const navigate = useNavigate()
    useEffect(()=>{
       if(isProfileDeleted===true){
        navigate("/");
       } 
    },[navigate,isProfileDeleted]);
    // تغيير الصورة الشخصية مؤقتًا
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
         //   const fileUrl = URL.createObjectURL(file);
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
     // Delete Account Handler
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
        return(
            <div className="loading">
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
        )
    }
    return ( 
        <section className="profile">

            <div className="profile-header">
                <div className="profile-image-wrapper">
                <img src={file? URL.createObjectURL(file) :profile?.profilePhoto.url} alt="" className="profile-image" />
                   {user?._id === profile?._id &&( <form onSubmit={formSubmitHandler} >
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
          
               
                <div className="profile-teacher-info">
                <h1 className="profile-username">
                    {profile?.username}
                </h1>
                    <p className="profile-bio"> Bio :{profile?.bio}</p>
                    <p className="profile-bio"> PhoneNumber :{profile?.phoneNumber}</p>
                    <Link to={profile?.whatsappLink} 
                    className="profile-whatsapplink"> 
                    <img src="/icons/whatsapp.png" alt="" />
                    Whatsapp Link 
                    </Link>
                </div>

                <div className="user-date-joined">
                    <strong>
                        Date Joined:
                         <span>
                        <DateChange date={profile?.createdAt}/>
                        </span>
                    </strong>
                </div>
                {user?._id === profile?._id &&(
                    <button onClick={()=>setUpdateProfile(true)} className="profile-update-btn">
                <img  src="/icons/update.png" className="icon-update" alt="" />
                    Update Profile
                </button>)
                }
            
            </div>
           <div className="profile-courses-list pobular-course">
                <h2 className="profile-course-list-title">
                    {profile?.username} Courses:
                </h2>
                <div className="container">
                {profile?.courses?.map((c) => (
                    <div className="box" key={c.id}>
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
                        </div>

                        <div className="flex">
                            <span className="rel">
                            <img src="/icons/community.ico" alt="" />:{c.subscribers.length}
                            </span>
                            <span className="like">
                            <img src="/icons/like.png" alt="" />:{c.likes.length}
                            </span>
                        </div>
                        </div>
                    </div>
                    ))}
 
                </div>
            </div>
            {user?._id === profile?._id &&(<button onClick={deleteAccountHandler} className="profile-delete-btn">
                <img src="/icons/delete.png" className="icon-delete" alt="" />
                    Delete Your Account
                </button>
            )}
                {updateProfile && <UpdateTeacherProfileModal setUpdateProfile={setUpdateProfile}  profile={profile}/>}

        </section>
     );
}
 
export default TeacherProfile;