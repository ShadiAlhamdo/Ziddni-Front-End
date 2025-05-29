import {courseAction} from "../slices/courseSlice";
import request from "../../utils/request";
import {toast} from "react-toastify"
import { getUserCoursesFavorite, getUserCoursesSubscribe } from "./profileApiCall";


// Fetch Courses Bsed On Page Number && popular && Search
export function fetchCourses({ pageNumber, popular = false, search = "" } = {}) {
    return async (dispatch) => {
        try {
            const params = new URLSearchParams();
            if (pageNumber) params.append("pageNumber", pageNumber);
            if (popular) params.append("popular", "true");
            if (search) params.append("search", search);

            const { data } = await request.get(`/api/courses?${params.toString()}`);

            dispatch(courseAction.setCourses(data.courses));
            if(popular){
                 dispatch(courseAction.setCoursesPobular(data.courses));
            } // backend returns { courses }
        } catch (error) {
            toast.error(error?.response?.data?.message || "حدث خطأ أثناء جلب الكورسات");
        }
    };
}
// Fetch Courses Bsed On Category
export function fetchCoursesBaseOnCategory(category){
    return async (dispatch)=>{

        try {
           
            const {data}=await request.get(`/api/courses/category?category=${category}`)

            dispatch(courseAction.setCoursesCate(data));
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}

// Get Courses Count
export function getCoursesCount(){
    return async (dispatch)=>{

        try {
           
            const {data}=await request.get(`/api/courses/count`)

            dispatch(courseAction.setCourseCount(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}
// Create Course
export function createCourse(newCourse){
    return async (dispatch,getState)=>{
        const state=getState();
        try {
                dispatch(courseAction.setLoading()); // Loading

                await request.post(`/api/courses`,newCourse,
                {
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token,
                    "Conetnt-Type":"multipart/form-data"
                  }
                })
            toast.success("Course Created Successfully");
            dispatch(courseAction.setIsCourseCreated());
            
            setTimeout(() => {
                dispatch(courseAction.clearIsCourseCreated())
               
            }, 2000);// 2 second
            
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(courseAction.clearLoading());

        }
    }
}
// Fetch Single Courses 
export function fetchSingelCourse(coursId){
    return async (dispatch)=>{

        try {
           
            const {data}=await request.get(`/api/courses/${coursId}`)

            dispatch(courseAction.setCourse(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}

// Toggel Like Course 
export function ToggelLikeCourse(coursId){
    return async (dispatch,getState)=>{
            const state=getState()
        try {
           
            const {data}=await request.put(`/api/courses/like/${coursId}`,{},{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            })

            dispatch(courseAction.setLike(data));
            
        } catch (error) {
            toast.error(error.response.data.message);

        }
    }
}

// Toggle Favorite Course 
export function ToggelFavoriteSingelCourse(courseId ) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/courses/favorite/${courseId}`, {}, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                }
            });

            // يمكنك تعديل هذا حسب Reducer لديك
            dispatch(courseAction.setFavorite(data.course));
            toast.success(data.message);
           
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}
export function ToggelFavoriteCourse(courseId , currentPage) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/courses/favorite/${courseId}`, {}, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                }
            });

            dispatch(fetchCourses(currentPage));
             dispatch(getUserCoursesFavorite());
             dispatch(fetchCourses({popular:true}))
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}
// Toggle Subscribe Course 
export function ToggelSubscribeSingelCourse(courseId) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/courses/subscribe/${courseId}`, {}, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                }
            });
            dispatch(courseAction.setSubscribe(data.course));
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}
export function ToggelSubscribeCourse(courseId , currentPage) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/courses/subscribe/${courseId}`, {}, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                }
            });
           
            dispatch(fetchCourses(currentPage));
            toast.success(data.message);
            dispatch(getUserCoursesSubscribe());
            dispatch(fetchCourses({popular:true}));

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}
// Update  Course  Image
export function updateCourseImage(courseId,newImage) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/courses/update-image/${courseId}`, newImage, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                    "Content-Type":"multipart/form-data"
                }
            });
                dispatch(courseAction.setCourseImage(data))
            toast.success("New Course  Updated Successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}
// Update  Course  
export function updateCourse(courseId,newCourse) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.put(`/api/courses/${courseId}`, newCourse, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                }
            });
            dispatch(courseAction.setCourse(data));
            toast.success("New Course Image UPloaded Successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}
// Delete  Course  
export function deleteCourse(courseId) {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { data } = await request.delete(`/api/courses/${courseId}`, {
                headers: {
                    Authorization: "Bearer " + state.auth.user.token,
                }
            });
            dispatch(courseAction.deleteCourse(data.coursId));
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
}



