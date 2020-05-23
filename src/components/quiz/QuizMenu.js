import React from "react";

const QuizMenu = (props) => {
  const renderQuestions = props.questions.map((item) => {
    return <div className="ans-item">{item.answer}</div>;
  });

  return <div className="list-ans">{renderQuestions}</div>;
};

export default QuizMenu;
