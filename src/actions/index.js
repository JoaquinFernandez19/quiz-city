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
