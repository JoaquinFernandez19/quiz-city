import React, { useEffect } from "react";
import NavBar from "./NavBar";
import "../styles/info.scss";
import { connect } from "react-redux";
import { resetEverything } from "../actions";

const Info = (props) => {
  useEffect(() => {
    props.resetEverything();
  }, []);

  return (
    <div>
      <NavBar active={"info"} />
      <div className="info">
        <div className="info-content">
          <h1>What is QuizCity?</h1>
          <p>This website was made to learn how to use React Router, but also made to keep training with React on Redux.</p>
          <p>The Quizes that you will do are not that hard, but they can be very original. Try to do them alone with no help of Google.</p>
          <p>With that said, enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { resetEverything })(Info);
