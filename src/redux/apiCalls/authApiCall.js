import {authAction} from "../slices/authSlice";
import request from "../../utils/request";
import {toast} from "react-toastify"


// Login User
export function loginUser(user){
    return async (dispatch)=>{
        try {
            
            const {data}=await request.post("/api/auth/login",user)
            dispatch(authAction.login(data));
            localStorage.setItem("userInfo", JSON.stringify(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}

// Logout User
export function logoutUser(){
    return async (dispatch)=>{
      dispatch(authAction.logout());
      localStorage.removeItem("userInfo")
    }
}

// Register User
export function registerUser(user){
    return async (dispatch)=>{
        try {
            
            const {data}=await request.post("/api/auth/register",user)
            dispatch(authAction.register(data.message));
            
            
        } catch (error) {
            toast.error(error.response.data.message);
     
        }
    }
}

// Verify Email
export function verifyEmail(userId,token){
    return async (dispatch)=>{
        try {
            
          const {data} = await request.get(`/api/auth/${userId}/verify/${token}`)
            dispatch(authAction.setIsEmailVerified());
            toast.success(data.message);
            
        } catch (error) {
            toast.error(error.response.data.message);
     
        }
    }
}