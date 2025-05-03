import { Link } from "react-router-dom";
import DateChange from "../../components/Date/DateChange";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useState } from "react";
import UpdateStudnetProfileModal from "./UpdateStudentProfileModal";
import { ToastContainer } from "react-toastify";
const StudentProfile = () => {
    const userStudent={
        _id: "67c4fac7d1e843c2c6c7c5a4",
        username: "shadi Alhamdo",
        email: "shadi@email.com",
        profilePhoto: {
            url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1740962931/sfm7u94y5terc5z5g81d.jpg",
            publicId: "sfm7u94y5terc5z5g81d"
        },
        role: "student",
        isAdmin: false,
        isAccountVerified: false,
        createdAt: "2025-03-03T00:41:43.798Z",
        updatedAt: "2025-03-03T00:48:52.968Z",
        "__v": 0,
        bio: "I´m New student",
        courses: [],
        questions: [
            {
                _id: "67c504e0448a20d67d9bc19d",
                content: "Update New Question From fadi",
                user: "67c4fac7d1e843c2c6c7c5a4",
                createdAt: "2025-03-03T01:24:48.490Z",
                updatedAt: "2025-03-03T01:26:03.791Z",
                "__v": 0
            }
        ],
        id: "67c4fac7d1e843c2c6c7c5a4"
    }
    const coursesSubscribe= [
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
            subscribers: [
                "67bb963f1868ccec7f382bbe"
            ],
            favoriteBy: [
                "67bb963f1868ccec7f382bbe"
            ],
            createdAt: "2025-04-22T17:38:20.457Z",
            updatedAt: "2025-04-27T16:41:30.595Z",
            "__v": 3
        }
    ]
    const coursesFavorite= [
        {
            _id: "6807d40c21d8f38d6b405f5b",
            title: "Web Course",
            description: "Design Course For Biggner",
            user: "6807d3ed21d8f38d6b405f57",
            category: "Design",
            image: {
                "url": "https://res.cloudinary.com/djzntpxjj/image/upload/v1745343499/hi1ld0ggd05s2nkdnxcf.jpg",
                "publicId": "hi1ld0ggd05s2nkdnxcf"
            },
            likes: [],
            videos: [
                "6807d43721d8f38d6b405f60"
            ],
            subscribers: [
                "67bb963f1868ccec7f382bbe"
            ],
            favoriteBy: [
                "67bb963f1868ccec7f382bbe"
            ],
            createdAt: "2025-04-22T17:38:20.457Z",
            updatedAt: "2025-04-27T16:41:30.595Z",
            "__v": 3
        }
    ]
    const [updateProfile,setUpdateProfile]=useState(false);
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
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Account has been deleted.",
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
        <section className="profile community-page">
            <ToastContainer position="top-center" theme="colored"/>
            <div className="profile-header">
                <div className="profile-image-wrapper">
                    <img src={userStudent.profilePhoto.url} alt="" className="profile-image" />
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
                <div className="profile-user-info">
                <h1 className="profile-username">
                    {userStudent.username}
                </h1>
                <p className="profile-bio"> Bio :{userStudent.bio}</p>

                <div className="user-date-joined">
                    <strong>
                        Date Joined:
                         <span>
                        <DateChange date={userStudent.createdAt}/>
                        </span>
                    </strong>
                </div>
                <button  onClick={()=>setUpdateProfile(true)} className="profile-update-btn">
                <img src="/icons/update.png" className="icon-update" alt="" />
                    Update Profile
                </button>
                </div>
            </div>
           <div className="profile-courses-list pobular-course">
                <h2 className="profile-course-list-title">
                    Your Subscription Courses:
                </h2>
                <div className="container">
                {coursesSubscribe?.map((c) => (
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
                            <Link to={`/courses/details/${c.id}`} className="readmore-course">
                            Read More...
                            </Link>
                            <button className="delete-course">
                                <img className="icon-delete" src="/icons/delete.png" alt="" />
                                Cancel Subscribe
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
            <div className="profile-courses-list pobular-course">
                <h2 className="profile-course-list-title">
                    Your Favorite Courses:
                </h2>
                <div className="container">
                {coursesFavorite?.map((c) => (
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
                            <Link to={`/courses/details/${c.id}`} className="readmore-course">
                            Read More...
                            </Link>
                            <button className="delete-course">
                                <img className="icon-delete" src="/icons/delete.png" alt="" />
                                Cancel Favorite
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
            <div className="container">
    <h2 className="profile-course-list-title">
                    Your Question:
                </h2>
            <Link to={"/answers/1"} className="box">
            <div className="box-info">
                <div className="student-info">
                    <img src="/Images/student.jpg" alt="" />
                    <p className="student-name">
                    student name: shadi Alhamdo
                    </p>
                </div>
                <span className="date">01-02-2025</span>
            </div>
            <div className="box-content">
                the new question For Test ......
                This is New Question For Testing ,This is New Question For Testing ,
                This is New Question For Testing ,This is New Question For Testing ,
            </div>
            </Link>
            <Link to={"/answers/1"} className="box">
                <div className="box-info">
                    <div className="student-info">
                        <img src="/Images/student.jpg" alt="" />
                        <p className="student-name">
                        student name: shadi Alhamdo
                        </p>
                    </div>
                    <span className="date">01-02-2025</span>
                </div>
                <div className="box-content">
                    the new question For Test ......
                    This is New Question For Testing ,This is New Question For Testing ,
                    This is New Question For Testing ,This is New Question For Testing ,
                </div>
            </Link>
            <Link to={"/answers/1"} className="box">
                <div className="box-info">
                    <div className="student-info">
                        <img src="/Images/student.jpg" alt="" />
                        <p className="student-name">
                        student name: shadi Alhamdo
                        </p>
                    </div>
                    <span className="date">01-02-2025</span>
                </div>
                <div className="box-content">
                    the new question For Test ......
                    This is New Question For Testing ,This is New Question For Testing ,
                    This is New Question For Testing ,This is New Question For Testing ,
                </div>
            </Link>
            </div>
            <button onClick={deleteAccountHandler} className="profile-delete-btn">
                <img src="/icons/delete.png" className="icon-delete" alt="" />
                    Delete Your Account
            </button>
            {updateProfile && <UpdateStudnetProfileModal setUpdateProfile={setUpdateProfile} />}
        </section>
     );
}
 
export default StudentProfile;