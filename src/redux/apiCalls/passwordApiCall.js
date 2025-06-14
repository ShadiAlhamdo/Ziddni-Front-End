import {passwordAction} from "../slices/passwordSlice";
import request from "../../utils/request";
import {toast} from "react-toastify"


// Forgot Pssword User
export function forgotPassword(email){
    return async ()=>{
        try {
            
            const {data}=await request.post("/api/password/reset-password-link",{email})
            toast.success(data.message);            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get Reset Pssword 
export function getResetPassword(userId,token){
    return async (dispatch)=>{
        try {
            
            await request.get(`/api/password/reset-password/${userId}/${token}`)

        } catch (error) {
            console.log(error);
            dispatch(passwordAction.setError())
        }
    }
}
//  Reset  The Pssword 
export function resetPassword(newPassword,user){
    console.log(newPassword)
    console.log(user)
    return async ()=>{
        try {
            
          const {data}=  await request.post(`/api/password/reset-password/${user.userId}/${user.token}`
            ,{
                password:newPassword
            });

            toast.success(data.message);

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }
}