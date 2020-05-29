export const selectQuiz = (quiz) => {
  return {
    type: "SELECT_QUIZ",
    payload: {
      quiz: quiz,
    },
  };
};
export const nextQuestion = () => {
  return {
    type: "NEXT_QUESTION",
  };
};

export const preventSelection = () => {
  return {
    type: "PREVENT_SELECTION",
  };
};
export const resumeSelection = () => {
  return {
    type: "RESUME_SELECTION",
  };
};

export const resetEverything = () => {
  return {
    type: "RESET",
  };
};

export const wrong = () => {
  return {
    type: "WRONG",
  };
};
export const corr = () => {
  return {
    type: "CORRECT",
  };
};
export const finishQuiz = () => {
  return {
    type: "FINISH_QUIZ",
  };
};
