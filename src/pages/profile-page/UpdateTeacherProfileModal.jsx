import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUserProfile, updateProfile } from "../../redux/apiCalls/profileApiCall";
const UpdateTeacherProfileModal = ({setUpdateProfile,profile}) => {

    const dispatch=useDispatch()
    const [username,setUsername]=useState(profile.username);
    const [bio,setBio]=useState(profile.bio);
    const [password,setPassword]=useState("");
    const [phoneNumber,setPhoneNumber]=useState(profile.phoneNumber);
    const [whatsappLink,setWhatsaooLink]=useState(profile.whatsappLink);
    // Form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        const UpdatedUser={username,whatsappLink,phoneNumber,bio}
         if(password.trim()!==""){
            UpdatedUser.password=password;
         }
        if(username.trim()==="") return toast.error("User Name Is Required")

        dispatch(updateProfile(profile._id,UpdatedUser));
        dispatch(getUserProfile(profile._id));
        setUpdateProfile(false)
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