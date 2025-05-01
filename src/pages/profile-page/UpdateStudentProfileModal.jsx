import { useState } from "react";
import { toast } from "react-toastify";

const UpdateStudnetProfileModal = ({setUpdateProfile}) => {
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

    const [username,setUsername]=useState(userStudent.username);
    const [bio,setBio]=useState(userStudent.bio);
    const [password,setPassword]=useState("");
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
    e.preventDefault();
    if(username.trim()==="")
        { return toast.error("User Name Is Required")
    }
    const UpdatedUser={username,bio}
    if(password.trim()!== ""){
        UpdatedUser.password=password;
        }
    
    console.log(UpdatedUser)
    }
    return ( 
        <div className="update-course">
            <form onSubmit={formSubmitHandler}  className="update-course-form">
                <abbr title="close" onClick={()=>setUpdateProfile(false)}>
                    <img className="update-course-form-close" src="/icons/cancel.png" alt="" />
                </abbr>
                <h1 className="update-course-title">Update Your Profile</h1>
                <input type="text" name="" id=""
                 className="update-course-input"
                 placeholder="User Name"
                 value={username} 
                 onChange={(e)=>setUsername(e.target.value)}
                 />
                 <input type="text" name="" id=""
                 className="update-course-input"
                 value={bio} 
                 placeholder="Type Your Bio Here ..."
                 onChange={(e)=>setBio(e.target.value)}
                 />
                 <input type="password" name="" id=""
                 className="update-course-input"
                 placeholder="Update Your Password Here "
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}
                 />
                 
                
                 <button type="submit" className="update-course-btn">Update Profile</button>
            </form>
        </div>
     );
}
 
export default UpdateStudnetProfileModal;