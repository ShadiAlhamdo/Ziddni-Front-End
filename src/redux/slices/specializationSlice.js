import {createSlice} from "@reduxjs/toolkit";

const specializationSlice=createSlice({
    name:"Specialization",
    initialState:{
        specializations:[],
        pobularSpecializations:[],
    },
    reducers:{
      setSpecializations(state,action){
        state.specializations=action.payload;
      },setPobularSpecializations(state,action){
        state.pobularSpecializations=action.payload;
      },
      createSpecialization(state,action){
        state.specializations.push(action.payload);
      },
      deleteSpecialization(state,action){
        state.specializations=state.specializations.filter(s=>s._id !== action.payload);
      },
      
      


    }
});

const specializationReducer = specializationSlice.reducer;
const specializationAction = specializationSlice.actions;

export {specializationAction,specializationReducer}