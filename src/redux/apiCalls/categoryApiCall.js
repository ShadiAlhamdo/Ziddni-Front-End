
import request from "../../utils/request";
import {toast} from "react-toastify"
import { categoryAction } from "../slices/categorySlice";


// Fetch All Ctegories
export function fetchAllCtegories() {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.get(`/api/categories`,{
                headers: {
                    Authorization:"Bearer " + state.auth.user.token
                }
              })
            dispatch(categoryAction.setCategorys(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Create Ctegory
export function createCtegory(newCategory) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.post(`/api/categories`,newCategory,{
                headers: {
                    Authorization:"Bearer " + state.auth.user.token
                }
              })
            dispatch(categoryAction.addCategory(data));
            dispatch(fetchAllCtegories());
            toast.success("Category Created Successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Delete Ctegory
export function deleteCtegory(categoryId) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.delete(`/api/categories/${categoryId}`,{
                headers: {
                    Authorization:"Bearer " + state.auth.user.token
                }
              })
            dispatch(categoryAction.deleteCategory(data?.categoryId));
            toast.success(data.message );
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}



