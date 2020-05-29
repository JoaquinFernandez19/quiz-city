import { combineReducers } from 'redux';

//Reducers !

export const quizReducer = (quiz = 'none', action) => {
  if (action.type === 'SELECT_QUIZ') {
    return (quiz = action.payload.quiz);
  }
  if (action.type === 'RESET') {
    return (quiz = 'none');
  }

  return quiz;
};
//
export const currentQuestionReducer = (question = 1, action) => {
  if (action.type === 'NEXT_QUESTION') {
    return (question = question + 1);
  }
  if (action.type === 'RESET') {
    return (question = 1);
  }
  return question;
};
export const optionSelectionReducer = (clickable = true, action) => {
  if (action.type === 'PREVENT_SELECTION') {
    return (clickable = false);
  }
  if (action.type === 'RESUME_SELECTION') {
    return (clickable = true);
  }
  if (action.type === 'RESET') {
    return (clickable = true);
  }
  return clickable;
};
export const correctAnsReducer = (correctAns = 0, action) => {
  if (action.type === 'CORRECT') {
    return (correctAns = correctAns + 1);
  }
  if (action.type === 'RESET') {
    return (correctAns = 0);
  }
  return correctAns;
};
export const wrongAnsReducer = (wrongAns = 0, action) => {
  if (action.type === 'WRONG') {
    return (wrongAns = wrongAns + 1);
  }
  if (action.type === 'RESET') {
    return (wrongAns = 0);
  }
  return wrongAns;
};
export const quizStateReducer = (quizState = 'started', action) => {
  if (action.type === 'FINISH_QUIZ') {
    return (quizState = 'finished');
  }
  if (action.type === 'RESET') {
    quizState = 'started';
  }
  return quizState;
};

export default combineReducers({
  quiz: quizReducer,
  quizState: quizStateReducer,
  currentQuestion: currentQuestionReducer,
  optionSelection: optionSelectionReducer,
  correctTracker: correctAnsReducer,
  wrongTracker: wrongAnsReducer,
});
