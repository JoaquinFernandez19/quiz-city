import React, { useRef } from "react";
import { connect } from "react-redux";
import { nextQuestion, preventSelection, resumeSelection, corr, wrong } from "../../actions";

const QuizMenu = (props) => {
  const correctRef = useRef(null);

  const handleChooseOption = (item, event) => {
    if (item.correct && props.optionSelection) {
      props.preventSelection();
      props.corr();
      event.target.style.backgroundColor = "#17fc03";
      setTimeout(() => {
        props.resumeSelection();
        props.nextQuestion();
      }, 1500);
    }
    if (!item.correct && props.optionSelection) {
      props.preventSelection();
      props.wrong();
      event.target.style.backgroundColor = "#fc0303";
      correctRef.current.style.backgroundColor = "#17fc03";
      setTimeout(() => {
        props.resumeSelection();
        props.nextQuestion();
      }, 1500);
    }
  };

  const renderQuestions = props.questions.map((item) => {
    if (item.correct) {
      return (
        <div
          className="ans-item"
          ref={correctRef}
          key={item.answer}
          onClick={(event) => {
            handleChooseOption(item, event);
          }}
        >
          {item.answer}
        </div>
      );
    }
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
    optionSelection: state.optionSelection,
  };
};

export default connect(mapStateToProps, { corr, wrong, nextQuestion, preventSelection, resumeSelection })(QuizMenu);
