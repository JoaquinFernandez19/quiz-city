import React from "react";
//Router
import { Link } from "react-router-dom";
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
    placeholder: state.placeholder,
  };
};

export default connect(mapStateToProps)(Home);
