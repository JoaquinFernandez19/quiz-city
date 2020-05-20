import React from "react";
//Router
import { Link } from "react-router-dom";
//Redux
import { connect } from "react-redux";
//Components
import NavBar from "./NavBar";
//
//Sass
import "../styles/main.scss";

const Home = () => {
  return (
    <div>
      <NavBar active={"home"} />
      <h1>Home OWO</h1>

      <Link to="/quiz">
        <button>Go to quizz!</button>
      </Link>
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
