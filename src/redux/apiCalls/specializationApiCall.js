
import {specializationAction} from "../slices/specializationSlice"
import request from "../../utils/request";
import {toast} from "react-toastify"



// Get Specializations 
export function getSpecializations(){
    return async (dispatch)=>{
        try {
           
            const {data}=await request.get(`/api/specialization`)

            dispatch(specializationAction.setSpecializations(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Get Pobular Specializations 
export function getPobularSpecializations(){
    return async (dispatch)=>{
        try {
           
            const {data}=await request.get(`/api/specialization/top-specializations`)

            dispatch(specializationAction.setPobularSpecializations(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Create Specialization
export function createSpecialization(newSpecialization){
    return async (dispatch ,getState)=>{
        const state = getState();
        try {
           
            const {data}=await request.post(`/api/specialization`,newSpecialization,{
                headers:{
                    Authorization : "Bearer " + state.auth.user.token
                }

            })

            dispatch(specializationAction.createSpecialization(data));
            toast.success("New Specialization Created successFully");
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Delete Specialization
export function deleteSpecialization(specializationId){
    return async (dispatch ,getState)=>{
        const state = getState();
        try {
           
            const {data}=await request.delete(`/api/specialization/${specializationId}`,{
                headers:{
                    Authorization : "Bearer " + state.auth.user.token
                }

            })

            dispatch(specializationAction.deleteSpecialization(data.specializationId));
            toast.success(data.message);
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Update Specialization by Id
export function updateSpecializationById(specializationId,formData){
    return async (dispatch,getState)=>{
        const state = getState();
        try {
           
            const {data}=await request.put(`/api/specialization/${specializationId}`,formData,{
                headers:{
                    Authorization: "Bearer " + state.auth.user.token,
                    "Content-Type":"multipart/form-data"
                }
            })

            dispatch(getSpecializations());
            toast.success(data.message);
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}


