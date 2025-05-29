import {createSlice} from "@reduxjs/toolkit";

const commentSlice=createSlice({
    name:"Comment",
    initialState:{
        comments:[],
        commentsLast:[],
        commentsCount:null,
  

    },
    reducers:{
      setComments(state,action){
        state.comments=action.payload;
      },setLastComments(state,action){
        state.commentsLast=action.payload;
      },
      addQuestion(state, action) {
        state.questions.unshift(action.payload); // نضيف السؤال في بداية القائمة
      },
      setCommentsCount(state,action){
        state.commentsCount = action.payload;
      }


    }
});

const commentReducer = commentSlice.reducer;
const commentAction = commentSlice.actions;

export {commentAction,commentReducer}