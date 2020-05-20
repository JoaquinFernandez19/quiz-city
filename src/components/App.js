import React from "react";
//React router
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Home from "./Home";
import Quiz from "./Quiz";
//
//Sass
import "../styles/main.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
