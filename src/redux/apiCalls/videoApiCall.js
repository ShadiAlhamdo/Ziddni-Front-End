import {videoAction} from "../slices/videoSlice";
import request from "../../utils/request";
import {toast} from "react-toastify"


// Create Video
export function createVideo(newVideo,courseId){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
                dispatch(videoAction.setLoading()); // Loading

                await request.post(`/api/videos/${courseId}`,newVideo,
                {
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token,
                    "Conetnt-Type":"multipart/form-data"
                  }
                })

            dispatch(videoAction.setIsVideoCreated());
            
            setTimeout(() => {
                dispatch(videoAction.clearIsVideoCreated());
                toast.success("Video Created Successfully");
            }, 2000);// 2 second
            
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(videoAction.clearLoading());

        }
    }
}
// Fetch Singel Video
export function fetchSingelVideo(videoId){
    return async (dispatch,getState)=>{
            const satet=getState();
        try {
           
            const {data}=await request.get(`/api/videos/${videoId}`,{
                headers:{
                    Authorization:"Bearer " + satet.auth.user.token
                }
            })

            dispatch(videoAction.setVideo(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Update  Video  Image && Title
export function updateVideoImageTitle(videoId,newVideo) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/videos/upload-image/${videoId}`, newVideo, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                    "Content-Type":"multipart/form-data"
                }
            });
            console.log(data)
                dispatch(videoAction.setVideo(data));
            toast.success("Video  Updated Successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}

// Update  Video  
export function updateVideo(videoId,newVideo) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/videos/${videoId}`, newVideo, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                    "Content-Type":"multipart/form-data"
                }
            });
            dispatch(videoAction.setVideo(data));
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}

// Delete  Video  
export function deleteVideo(videoId) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.delete(`/api/videos/${videoId}`, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                }
            });
            dispatch(videoAction.deleteVideo(data.videoId));
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}
// Get Count Videos (For Admin)
export function getVideosCount(){
    return async (dispatch,getState)=>{
            const satet=getState();
        try {
           
            const {data}=await request.get(`/api/videos/count`,{
                headers:{
                    Authorization:"Bearer " + satet.auth.user.token
                }
            })

            dispatch(videoAction.setvideoCount(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Fetch All Video
export function fetchAllVideo(){
    return async (dispatch,getState)=>{
            const satet=getState();
        try {
           
            const {data}=await request.get(`/api/videos`,{
                headers:{
                    Authorization:"Bearer " + satet.auth.user.token
                }
            })

            dispatch(videoAction.setVideosAll(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}