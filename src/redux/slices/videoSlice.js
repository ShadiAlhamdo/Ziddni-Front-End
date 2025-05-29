import {createSlice} from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        videos:[],
        videosCount:null,
        videosCourse:[],
        loading:false,
        isVideoCreated:false,
        video:null,
        videosCount:null,
        videosAll:[],
    },
    reducers:{
      setvideos(state,action){
        state.videos=action.payload;
      },
      setvideoCount(state,action){
        state.videosCount=action.payload;
      },
      setvideosCourse(state,action){
        state.videosCourse=action.payload;
      },
      setLoading(state){
        state.loading=true;
      },
      clearLoading(state){
        state.loading=false;
      },
      setIsVideoCreated(state){
        state.isVideoCreated=true;
        state.loading=false;
      },
      clearIsVideoCreated(state){
        state.isVideoCreated=false;
      },
      setVideo(state,action){
        state.video=action.payload
      },
      deleteVideo(state,action){
        console.log(action.payload)
        state.videos =  state.videos.filter(v => v._id !== action.payload);
      },
      setVideosCount(state,action){
        state.videosCount = action.payload;
      },
      setVideosAll(state,action){
        state.videosAll = action.payload;
      }


    }
});

const videoReducer = videoSlice.reducer;
const videoAction = videoSlice.actions;

export {videoAction,videoReducer}