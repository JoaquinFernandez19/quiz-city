import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import QuizMenu from "./quiz/QuizMenu";
import "../styles/quiz.scss";
import quizLol from "../data/lolquiz.json";

const Quiz = (props) => {
  const renderedQuiz = quizLol.map((item) => {
    if (item.hasOwnProperty("q1")) {
      return <QuizMenu questions={item.anserwsArray1} />;
    }
    return null;
  });
  const renderQuestion = quizLol.map((item) => {
    if (item.hasOwnProperty("q1")) {
      return (
        <div className="question">
          <h2>{item.q1}</h2>
        </div>
      );
    }
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
  };
};

export default connect(mapStateToProps)(Quiz);
