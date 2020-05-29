import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { finishQuiz, resetEverything } from '../actions';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import QuizMenu from './quiz/QuizMenu';
import '../styles/quiz.scss';
import quizLol from '../data/lolquiz.json';

const Quiz = (props) => {
  useEffect(() => {
    if (props.currentQuestion === quizLol.length + 1) {
      props.finishQuiz();
    }
  }, [props.currentQuestion, props.quizState]);

  const renderedQuiz = quizLol.map((item) => {
    if (item.hasOwnProperty(`q${props.currentQuestion}`)) {
      return (
        <QuizMenu
          questions={item[`anserwsArray${props.currentQuestion}`]}
          key={props.currentQuestion}
        />
      );
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
  if (props.quiz !== 'none' && props.quizState !== 'finished') {
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
  if (props.quizState === 'finished') {
    return (
      <div>
        <NavBar />
        <div className="quiz-content">
          <div className="finished">
            <h1>You have finished</h1>

            <div className="results">
              <h1>Results</h1>
              <p>
                Correct questions:{' '}
                <span style={{ color: '#17fc03' }}>{props.correctTracker}</span>
              </p>
              <p>
                Wrong questions:{' '}
                <span style={{ color: '#fc0303' }}>{props.wrongTracker}</span>
              </p>
              <Link to="/">Try Again</Link>
            </div>
          </div>
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
    quizState: state.quizState,
    currentQuestion: state.currentQuestion,
    correctTracker: state.correctTracker,
    wrongTracker: state.wrongTracker,
  };
};

export default connect(mapStateToProps, { finishQuiz, resetEverything })(Quiz);
