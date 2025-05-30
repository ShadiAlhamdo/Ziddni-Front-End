
import {communityAction} from "../slices/communitySlice"
import request from "../../utils/request";
import {toast} from "react-toastify"



// Get All Question
export function getAllQuestion() {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.get(`/api/community/latest`,{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
            dispatch(communityAction.setQuestions(data));
        } catch (error) {
            toast.error(error.response.data.message ||"Something Went Wrong" );
        }
    }
}
// Get Answers For specific Question
export function getAllAnswersForSpecificQuestion(questionId) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.get(`/api/community/question/${questionId}/answers`,{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
            dispatch(communityAction.setAnswersQes(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Add New Question 
export function addNewQuestion(content) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.post(`/api/community/question`,{content},{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
             dispatch(getAllQuestion()); // ← استخدام السؤال فقط
             toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        }
    }
}
// Update  Question 
export function updateQuestion(content,id) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.put(`/api/community/question/${id}`,{content},{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
                dispatch(getAllQuestion());
             toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        }
    }
}
// Delete Question
export function deleteQuestion(id) {
    return async (dispatch,getState) => {
        const state = getState();
        try {
            const { data } = await request.delete(`/api/community/question/${id}`,{
                headers:{
                    Authorization:"Bearer " + state.auth.user.token,
                }
            });
                dispatch(getAllQuestion());
                toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}
// Add New Answer 
export function addNewAnswer(content,id) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.post(`/api/community/question/${id}/answer`,{content},{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
             dispatch(getAllAnswersForSpecificQuestion(id));// ← استخدام السؤال فقط
             toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        }
    }
}
// Update  Answer 
export function updateAnswer(content,answer) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.put(`/api/community/answer/${answer?._id}`,{content},{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
               
             toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        }
    }
}
// Delete  Answer 
export function deleteAnswer(answer) {
    return async (dispatch,getState) => {
        const state=getState();
        try {
            const { data } = await request.delete(`/api/community/answer/${answer?._id}`,{
                  headers: {
                    Authorization:"Bearer " + state.auth.user.token
                  }
                })
              dispatch(getAllAnswersForSpecificQuestion(answer.question._id));
             toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        }
    }
}
// Search for questions
export function searchQuestions(query) {
   
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const { data } = await request.get(`/api/community/search?q=${query}`, {
        headers: {
          Authorization: "Bearer " + state.auth.user.token,
        },
      });

      // وضع النتائج في Redux
      dispatch(communityAction.setQuestions(data.questions));
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong during search");
    }
  };
}
// Get Question Count (For Admin)
export function getQuestionsCount() {
   
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const { data } = await request.get(`/api/community/question/count`, {
        headers: {
          Authorization: "Bearer " + state.auth.user.token,
        },
      });

      // وضع النتائج في Redux
      dispatch(communityAction.setQuestionsCount(data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong during search");
    }
  };
}
// Get  Answer Count (For Admin)
export function getAnswersCount() {
   
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const { data } = await request.get(`/api/community/answer/count`, {
        headers: {
          Authorization: "Bearer " + state.auth.user.token,
        },
      });

      // وضع النتائج في Redux
      dispatch(communityAction.setAnswersCount(data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong during search");
    }
  };
}
// Get  All Answer Count (For Admin)
export function getAllAnswers() {
   
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const { data } = await request.get(`/api/community/answer`, {
        headers: {
          Authorization: "Bearer " + state.auth.user.token,
        },
      });

      // وضع النتائج في Redux
      dispatch(communityAction.setAllAnswers(data));
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong during search");
    }
  };
}