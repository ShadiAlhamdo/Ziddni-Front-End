import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/apiCalls/profileApiCall";

const UpdateStudnetProfileModal = ({setUpdateProfile ,profile}) => {

    const dispatch=useDispatch()
    const [username,setUsername]=useState(profile.username);
    const [bio,setBio]=useState(profile.bio);
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
        dispatch(updateProfile(profile._id,UpdatedUser));
        setUpdateProfile(false);
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