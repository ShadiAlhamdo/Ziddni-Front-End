import { useState } from "react";
import { toast } from "react-toastify";

const UpdateTeacherProfileModal = ({setUpdateProfile}) => {
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

    const [username,setUsername]=useState(userTeacher.username);
    const [bio,setBio]=useState(userTeacher.bio);
    const [password,setPassword]=useState("");
    const [phoneNumber,setPhoneNumber]=useState(userTeacher.phoneNumber);
    const [whatsappLink,setWhatsaooLink]=useState(userTeacher.whatsappLink)
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
         const UpdatedUser={username,bio}
         if(password.trim()!==""){
            UpdatedUser.password=password;
         }
        if(username.trim()==="") return toast.error("User Name Is Required")

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
                 <input type="text" name="" id=""
                 className="update-course-input"
                 value={phoneNumber} 
                 placeholder="Type Your Phone Number Here ..."
                 onChange={(e)=>setPhoneNumber(e.target.value)}
                 />
                 <input type="text" name="" id=""
                 className="update-course-input"
                 value={whatsappLink} 
                 placeholder="Type Your Whatsapp Link Here ..."
                 onChange={(e)=>setWhatsaooLink(e.target.value)}
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
 
export default UpdateTeacherProfileModal;