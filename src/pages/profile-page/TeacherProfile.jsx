import { Link } from "react-router-dom";
import DateChange from "../../components/Date/DateChange";
import { useState } from "react";
import UpdateTeacherProfileModal from "./UpdateTeacherProfileModal";
import { ToastContainer } from "react-toastify";

const TeacherProfile = () => {
  
    const userTeacher={
        _id: "6807d3ed21d8f38d6b405f57",
        username: "alaa",
        email: "alaa@email.com",
        profilePhoto: {
            url: "https://media.istockphoto.com/id/1389898082/de/foto/s%C3%BC%C3%9Fer-junge-ikonischer-charakter-mit-brille-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=cOl9XSWvShItbtNwlZabaVpW2TQ7Yljx0t-LSaRm4x4=",
            publicId: null
        },
        role: "teacher",
        isAdmin: false,
        isAccountVerified: false,
        phoneNumber: "+963933519382",
        whatsappLink: "link",
        specialization: "67ba0df7b4f995b3d95bd651",
        createdAt: "2025-04-22T17:37:49.656Z",
        updatedAt: "2025-04-22T17:37:49.656Z",
        __v: 0,
        courses: [
            {
                _id: "6807d40c21d8f38d6b405f5b",
                title: "Web Course",
                description: "Design Course For Biggner",
                user: "6807d3ed21d8f38d6b405f57",
                category: "Design",
                image: {
                    url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1745343499/hi1ld0ggd05s2nkdnxcf.jpg",
                    publicId: "hi1ld0ggd05s2nkdnxcf"
                },
                likes: [],
                videos: [
                    "6807d43721d8f38d6b405f60"
                ],
                subscribers: [],
                favoriteBy: [],
                createdAt: "2025-04-22T17:38:20.457Z",
                updatedAt: "2025-04-22T17:39:03.953Z",
                __v: 1
            }
        ],
        questions: [],
        bio: "I´m New Teacher",
        id: "6807d3ed21d8f38d6b405f57"
    }
    const [updateProfile,setUpdateProfile]=useState(false);
    console.log(updateProfile)
    return ( 
        <section className="profile">
        <ToastContainer position="top-center" theme="colored"/>

            <div className="profile-header">
                <div className="profile-image-wrapper">
                    <img src={userTeacher.profilePhoto.url} alt="" className="profile-image" />
                    <form >
                        <abbr title="choose profile photo">
                        <label htmlFor="file" className="upload-profile-photo-icon">
                        <img src="/icons/ios-photos.png" alt="" />
                        
                        </label>
                        </abbr>
                        <input style={{display:"none"}} type="file" name="file" id="file" />
                        <button type="submit" className="upload-profile-photo-btn">Upload</button>
                    </form>
                </div>
                <h1 className="profile-username">
                    {userTeacher.username}
                </h1>
                {userTeacher.role==="teacher" &&
                <div className="profile-teacher-info">
                    <p className="profile-bio"> Bio :{userTeacher.bio}</p>
                    <p className="profile-bio"> PhoneNumber :{userTeacher.phoneNumber}</p>
                    <Link to={userTeacher.whatsappLink} 
                    className="profile-whatsapplink"> 
                    <img src="/icons/whatsapp.png" alt="" />
                    Whatsapp Link 
                    </Link>
                </div>
                }
                <div className="user-date-joined">
                    <strong>
                        Date Joined:
                         <span>
                        <DateChange date={userTeacher.createdAt}/>
                        </span>
                    </strong>
                </div>
                <button onClick={()=>setUpdateProfile(true)} className="profile-update-btn">
                <img  src="/icons/update.png" className="icon-update" alt="" />
                    Update Profile
                </button>
            </div>
           <div className="profile-courses-list pobular-course">
                <h2 className="profile-course-list-title">
                    {userTeacher.username} Courses:
                </h2>
                <div className="container">
                {userTeacher?.courses?.map((c) => (
                    <div className="box" key={c.id}>
                        <span className="course-category">{c.category}</span>
                        <div className="box-image">
                        <img src={c.image.url} alt="" />
                        </div>
                        <div className="box-text">
                        <div className="title-date">
                            <h4>{c.title}</h4>
                            <span>{c.createdAt}</span>
                        </div>

                        <p className="description">
                            {c.description}
                        </p>

                        <div className="buttons">
                            <Link to={`/courses/details/${c.id}`} className="readmore-course">
                            Read More...
                            </Link>
                            <button className="register-course">
                            Register for the course
                            </button>
                            <button className="favorite-course">
                            Add Course To Favorite
                            </button>
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
            <button className="profile-delete-btn">
                <img src="/icons/delete.png" className="icon-delete" alt="" />
                    Delete Your Account
                </button>
                {updateProfile && <UpdateTeacherProfileModal setUpdateProfile={setUpdateProfile} />}

        </section>
     );
}
 
export default TeacherProfile;