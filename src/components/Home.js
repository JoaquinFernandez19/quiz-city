import React from "react";
//Router
//Redux
import { connect } from "react-redux";
//Components
import NavBar from "./NavBar";
import Slider from "./slider/Slider";

//
//Sass
import "../styles/main.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar active={"home"} />

      <Slider />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    quiz: state.quiz,
    placeholder: state.placeholder,
  };
};

export default connect(mapStateToProps)(Home);
