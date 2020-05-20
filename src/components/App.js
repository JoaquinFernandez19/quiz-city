import React from "react";
//React router
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Home from "./Home";
import Quiz from "./Quiz";
import Info from "./Info";
import Header from "./Header";
//
//Sass
import "../styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/info" component={Info} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
