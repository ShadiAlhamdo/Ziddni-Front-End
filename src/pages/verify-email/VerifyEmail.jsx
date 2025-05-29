import { Link, useParams } from "react-router-dom";
import "./VerifyEmail.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { verifyEmail } from "../../redux/apiCalls/authApiCall";
const VerifyEmail = () => {
   const dispatch = useDispatch();
   const {isEmailVerified} = useSelector(state=>state.auth);
   const {userId,token} = useParams()
   useEffect(()=>{
      dispatch(verifyEmail(userId,token));
   },[ userId , token ] )
    return ( 
        <div className="verify-email">
            {isEmailVerified ?
             <>
                <img src="/icons/verified.png" alt="" className="verify-email-icon" />
             <h1 className="verify-email-title">
                Your Email Has Been Successfully Veryfied
             </h1>
             <Link to={"/login"} className="verify-email-link">
                Go To Login Page
             </Link>
            </> 
            :
             <>
                <h1 className="verify-email-not-found">
                    Not Found
                </h1>
             </>
             }
        </div>
     );
}
 
export default VerifyEmail;