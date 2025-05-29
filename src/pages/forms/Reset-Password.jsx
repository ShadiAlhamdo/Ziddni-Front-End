import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useDispatch, useSelector} from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getResetPassword, resetPassword } from "../../redux/apiCalls/passwordApiCall";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const {isError} = useSelector(state=>state.password);
  const {userId,token} = useParams()
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

     useEffect(()=>{
        dispatch(getResetPassword(userId,token));
        

     },[userId ,token])
    
      const formSubmitHandler = (e) => {
        e.preventDefault();
    
        if (password.trim() === "") return toast.error("Pssword is required");
    
        // يمكنك هنا إرسال البيانات للسيرفر أو التحقق منها
        dispatch(resetPassword(password,{userId , token}));
        setPassword("");
        navigate("/login")
    }
    return ( 
        <section className="form-container login-container ">
          {isError ?
           <h1>Not Found</h1>
           :
           <>
             <h1 className="form-title">Reset Password</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Your New Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your New Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
           </>
           }
    
    </section>
     );
}
 
export default ResetPassword;
