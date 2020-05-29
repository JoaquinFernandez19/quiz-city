import React, { useEffect } from 'react';
//Router
//Redux
import { resetEverything } from '../actions';
import { connect } from 'react-redux';
//Components
import NavBar from './NavBar';
import Slider from './slider/Slider';

//
//Sass
import '../styles/main.scss';

const Home = (props) => {
  useEffect(() => {
    props.resetEverything();
  }, []);

  return (
    <div className="home">
      <NavBar active={'home'} />
      <Slider />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    quiz: state.quiz,
    quizState: state.quiz,
  };
};

export default connect(mapStateToProps, { resetEverything })(Home);
