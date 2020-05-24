import React from "react";
import { connect } from "react-redux";
import { nextQuestion } from "../../actions";

const QuizMenu = (props) => {
  const handleChooseOption = (item, event) => {
    if (item.correct) {
      event.target.style.backgroundColor = "green";
      setTimeout(() => {
        props.nextQuestion();
      }, 1500);
    } else {
      event.target.style.backgroundColor = "red";
      setTimeout(() => {
        props.nextQuestion();
      }, 1500);
    }
  };

  const renderQuestions = props.questions.map((item) => {
    return (
      <div
        className="ans-item"
        key={item.answer}
        onClick={(event) => {
          handleChooseOption(item, event);
        }}
      >
        {item.answer}
      </div>
    );
  });

  return <div className="list-ans">{renderQuestions}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentQuestion: state.currentQuestion,
  };
};

export default connect(mapStateToProps, { nextQuestion })(QuizMenu);
