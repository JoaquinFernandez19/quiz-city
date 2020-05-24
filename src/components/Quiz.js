import React, { useState } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import QuizMenu from "./quiz/QuizMenu";
import "../styles/quiz.scss";
import quizLol from "../data/lolquiz.json";

const Quiz = (props) => {
  const renderedQuiz = quizLol.map((item) => {
    if (item.hasOwnProperty(`q${props.currentQuestion}`)) {
      return <QuizMenu questions={item[`anserwsArray${props.currentQuestion}`]} key={props.currentQuestion} />;
    }
    return null;
  });
  const renderQuestion = quizLol.map((item) => {
    if (item.hasOwnProperty(`q${props.currentQuestion}`)) {
      return (
        <div className="question" key={item[`q${props.currentQuestion}`]}>
          <h2>{item[`q${props.currentQuestion}`]}</h2>
        </div>
      );
    }
    return null;
  });
  if (props.quiz !== "none") {
    return (
      <div>
        <NavBar />
        <div className="quiz-content">
          <h1>{props.quiz}</h1>
          {renderQuestion}
          {renderedQuiz}
        </div>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <div className="quiz-content">
        <h1>Please, go back home an select a quiz.</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    currentQuestion: state.currentQuestion,
  };
};

export default connect(mapStateToProps)(Quiz);
