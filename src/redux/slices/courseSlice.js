import {createSlice} from "@reduxjs/toolkit";

const courseSlice=createSlice({
    name:"course",
    initialState:{
        courses:[],
        pobularCourse:[],
        coursesCount:null,
        coursesCate:[],
        loading:false,
        isCourseCreated:false,
        course:null,
        coursesCount:null,
        

    },
    reducers:{
      setCourses(state,action){
        state.courses=action.payload;
      },
      setCourseCount(state,action){
        state.coursesCount=action.payload;
      },
      setCoursesCate(state,action){
        state.coursesCate=action.payload;
      },
      setCoursesPobular(state,action){
        state.pobularCourse=action.payload;
      },
      setLoading(state){
        state.loading=true;
      },
      clearLoading(state){
        state.loading=false;
      },
      setIsCourseCreated(state){
        state.isCourseCreated=true;
        state.loading=false;
      },
      clearIsCourseCreated(state){
        state.isCourseCreated=false;
      },
      setCourse(state,action){
        state.course=action.payload;
      },
      setLike(state,action){
        state.course.likes = action.payload.likes;
      },
      setFavorite: (state, action) => {
        state.course.favorites = action.payload.favorites;
      },
      setSubscribe: (state, action) => {
        state.course.subscribers = action.payload.subscribers;
      },
      setCourseImage: (state, action) => {
        state.course.image = action.payload.image;
      },
      deleteCourse(state,action){
        state.course = state.courses.filter(c => c._id !== action.payload);
      },
      setCoursesCount(state,action){
        state.coursesCount = action.payload;
      }

    }
});

const courseReducer = courseSlice.reducer;
const courseAction = courseSlice.actions;

export {courseAction,courseReducer}