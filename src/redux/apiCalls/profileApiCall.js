import {profileAction} from "../slices/profileSlice";
import {authAction} from "../slices/authSlice";
import request from "../../utils/request";
import {toast} from "react-toastify"


// Get User Profile
export function getUserProfile(userId){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
           
            const {data}=await request.get(`/api/users/profile/${userId}`,{
                headers: {
                    Authorization:"Bearer " + state.auth.user.token
                }
              })

            dispatch(profileAction.setProfile(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get User Courses Subscribe
export function getUserCoursesSubscribe(){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
            
            const { data } = await request.get(
                `/api/courses/my-subscribed`,
                {
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                }
              );
              
              dispatch(profileAction.setcoursesSubscribe(data));

        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get User Courses Favorite
export function getUserCoursesFavorite(){
   return async (dispatch,getState)=>{
    const state=getState();
        try {
            
            const { data } = await request.get(
                `/api/courses/my-favorites`,
                {
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                }
              );
              
              dispatch(profileAction.setcoursesFavorite(data));
              
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Upload Profile Photo
export function uploadProfilePhoto(newPhoto){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
           
            const {data}=await request.post(`/api/users/profile/profile-photo-upload`,newPhoto,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                    "Content-Type":"multipatrt/form-date"
                }
            });
            dispatch(profileAction.setProfilePhoto(data.profilePhoto));
            
            dispatch(authAction.setUserPhoto(data.profilePhoto));

            toast.success(data.message);
            
            // modify the user in local storage with photo
            const user=JSON.parse(localStorage.getItem("userInfo"));
            user.profilePhoto=data.profilePhoto;
            localStorage.setItem("userInfo",JSON.stringify(user));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Update User Profile 
export function updateProfile(userId,profile){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
           
            const {data}=await request.put(`/api/users/profile/${userId}`,profile,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
            dispatch(profileAction.updateProfile(data));
            
            dispatch(authAction.setUsername(data.username));
            

            toast.success("Updated Profile Successfully")
            // modify the user in local storage with new User Name
            const user=JSON.parse(localStorage.getItem("userInfo"));
            user.username=data.username;
            localStorage.setItem("userInfo",JSON.stringify(user));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get Teachers Count (For Admin Dashboard)
export function getTeachersCount(){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
             const {data} = await request.get(`/api/users/teacher/count`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
           
            dispatch(profileAction.setTeachersCount(data));

        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get All Teachers (For Admin Dashboard)
export function getAllTeachersProfiles(){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
             const {data} = await request.get(`/api/users/teacher`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
           
            dispatch(profileAction.setTeachersProfiles(data));

        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get Students Count (For Admin Dashboard)
export function getStudentsCount(){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
             const {data} = await request.get(`/api/users/student/count`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
           
            dispatch(profileAction.setStudentsCount(data));

        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get All Students (For Admin Dashboard)
export function getAllStudentsProfiles(){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
             const {data} = await request.get(`/api/users/student`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
           
            dispatch(profileAction.setStudentsProfiles(data));

        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Delete User Profile (Account)
export function deleteProfile(userId){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
            dispatch(profileAction.setLoading());
             const {data} = await request.delete(`/api/users/profile/${userId}`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
           
            dispatch(profileAction.setIsProfileDeleted());
            
            toast.success(data?.message);
           

            setTimeout(() =>  dispatch(profileAction.clearIsProfileDeleted()), 5000);

        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(profileAction.clearLoading());

        }
    }
}
