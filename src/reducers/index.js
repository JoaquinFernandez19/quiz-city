import { combineReducers } from "redux";

//Reducers !
export const placeholderReducer = (text = "hi, change me", action) => {
  return text;
};
export const quizReducer = (quiz = "none", action) => {
  if (action.type === "SELECT_QUIZ") {
    return (quiz = action.payload.quiz);
  }
  return quiz;
};
//
export const currentQuestionReducer = (question = 1, action) => {
  if (action.type === "NEXT_QUESTION") {
    return (question = question + 1);
  }
  return question;
};

export default combineReducers({
  placeholder: placeholderReducer,
  quiz: quizReducer,
  currentQuestion: currentQuestionReducer,
});
