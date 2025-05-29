
import {teacherAction} from "../slices/teacherSlice"
import request from "../../utils/request";
import {toast} from "react-toastify"


// Fetch All Teachers
export function fetchAllTeachers() {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.get(`/api/users/teacher`,{
                headers: {
                    Authorization:"Bearer " + state.auth.user.token
                }
              })
            dispatch(teacherAction.setTeachers(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Get Techers Based On  specialization
export function getTeacherSpecial(specialization) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.get(`/api/users/teacher/specialization?specialization=${specialization}`,{
                headers: {
                    Authorization:"Bearer " + state.auth.user.token
                }
              })
            dispatch(teacherAction.setTeachersSpecial(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Fetch Most Pobular Teachers
export function fetchMostPobularTeachers() {
    return async (dispatch) => {
     
        try {
            const { data } = await request.get(`/api/users/teacher/top`,)
            dispatch(teacherAction.setPobularTeachers(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}




