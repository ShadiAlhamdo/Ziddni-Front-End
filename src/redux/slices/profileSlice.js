import {createSlice} from "@reduxjs/toolkit";

const profileSlice=createSlice({
    name:"profile",
    initialState:{
        profile:null,
        coursesSubscribe:null,
        coursesFavorite:null,
        specializations:[],
        teachersProfiles:[],
        loading:false,
        isProfileDeleted:false,
        teachersCount:null,
        teachersProfiles:[],
        studentsCount:null,
        studentsProfiles:[]
    },
    reducers:{
      setProfile(state,action){
        state.profile=action.payload;
      },
      setcoursesSubscribe(state,action){
        state.coursesSubscribe=action.payload;
      },
      setcoursesFavorite(state,action){
        state.coursesFavorite=action.payload
      },
      setProfilePhoto(state,action){
        state.profile.profilePhoto=action.payload;
      },
      updateProfile(state,action){
        state.profile=action.payload;
      },
      setSpecializations(state,action){
        state.specializatios=action.payload;
      },
      setTeachersProfiles(state,action){
        state.teachersProfiles=action.payload;
      },
      setLoading(state){
        state.loading =true;
      },
      clearLoading(state){
        state.loading =false;
      },
      setIsProfileDeleted(state){
        state.isProfileDeleted = true;
        state.loading = false;
      },
      clearIsProfileDeleted(state){
        state.isProfileDeleted = false;
      },
      setTeachersCount(state,action){
        state.teachersCount = action.payload;
      },
      setTeachersProfiles(state,action){
        state.teachersProfiles = action.payload
      },setStudentsCount(state,action){
        state.studentsCount = action.payload;
      },
      setStudentsProfiles(state,action){
        state.studentsProfiles = action.payload
      }


    }
});

const profileReducer = profileSlice.reducer;
const profileAction = profileSlice.actions;

export {profileAction,profileReducer}