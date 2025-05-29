

import request from "../../utils/request";
import {toast} from "react-toastify"
import { commentAction } from "../slices/commentSlice";


// Fetch Comments For Specific Video
export function FetchCommentsForSpecificVideo(videoId) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.get(`/api/comments/video/${videoId}`,{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
            dispatch(commentAction.setComments(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Fetch Last 4 Comments 
export function FetchLastComments() {
    return async (dispatch) => {
        
        try {
            const { data } = await request.get(`/api/comments/last`)
            dispatch(commentAction.setLastComments(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// Create  Comment
export function createComment(content,video) {
    return async (dispatch,getState) => {
        const state = getState();
        try {
            const { data } = await request.post(`/api/comments/`,{content,video},{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            })
             dispatch(FetchCommentsForSpecificVideo(video));

                toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

// Update Comment
export function UpdateComment(content ,commentId,video) {
    return async (dispatch,getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/comments/${commentId}`,{content},{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
                dispatch(FetchCommentsForSpecificVideo(video));
                toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Delete Comment
export function deleteComment(commentId,video) {
    return async (dispatch,getState) => {
        const state = getState();
        try {
            const { data } = await request.delete(`/api/comments/${commentId}`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
                toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Get Comments Count (For Admin)
export function getCommentsCount() {
    return async (dispatch,getState) => {
        const state = getState();
        try {
            const { data } = await request.get(`/api/comments/count`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
                dispatch(commentAction.setCommentsCount(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Get  All Comments (For Admin)
export function getAllComments() {
    return async (dispatch,getState) => {
        const state = getState();
        try {
            const { data } = await request.get(`/api/comments`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
                dispatch(commentAction.setComments(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}


