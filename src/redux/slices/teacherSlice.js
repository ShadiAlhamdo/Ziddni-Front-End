import {createSlice} from "@reduxjs/toolkit";

const teacherSlice=createSlice({
    name:"teacher",
    initialState:{
        teachers:[],
        teachersSpecial:[],
         pobularTeachers:[],

    },
    reducers:{
      setTeachers(state,action){
        state.teachers=action.payload;
      },
      setTeachersSpecial(state,action){
        state.teachersSpecial=action.payload;
      }, 
      setPobularTeachers(state,action){
        state.pobularTeachers=action.payload;
      },
      ClearPobularTeachers(state,action){
        state.pobularTeachers=null;
      },


    }
});

const teacherReducer = teacherSlice.reducer;
const teacherAction = teacherSlice.actions;

export {teacherAction,teacherReducer}