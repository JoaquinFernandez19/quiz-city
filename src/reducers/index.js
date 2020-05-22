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

export default combineReducers({
  placeholder: placeholderReducer,
  quiz: quizReducer,
});
