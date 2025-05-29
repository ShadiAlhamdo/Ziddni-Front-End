import {createSlice} from "@reduxjs/toolkit";

const communitySlice=createSlice({
    name:"Community",
    initialState:{
        questions:[],
        answersQes:[],
        answersAll:[],
        question:null,
        questionsCount:null,
        answersCount:null,

    },
    reducers:{
      setQuestions(state,action){
        state.questions=action.payload;
      },
      setAnswersQes(state,action){
        state.answersQes=action.payload;
      },
      addQuestion(state, action) {
        state.questions.unshift(action.payload); // نضيف السؤال في بداية القائمة
      },
     setQuestion(state, action) {
        state.question = action.payload;
      },
      setAllAnswers(state, action) {
        state.answersAll = action.payload;
      },
      setQuestionsCount(state,action){
        state.questionsCount=action.payload;
      },
      setAnswersCount(state,action){
        state.answersCount=action.payload;
      }


    }
});

const communityReducer = communitySlice.reducer;
const communityAction = communitySlice.actions;

export {communityAction,communityReducer}