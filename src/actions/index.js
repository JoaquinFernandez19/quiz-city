export const selectQuiz = (quiz) => {
  return {
    type: "SELECT_QUIZ",
    payload: {
      quiz: quiz,
    },
  };
};
