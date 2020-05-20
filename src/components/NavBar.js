import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  if (props.active === "home") {
    return (
      <div className="navbar">
        <ul>
          <Link to="/">
            <li className="active">Home</li>
          </Link>
          <Link to="/info">
            <li>Info</li>
          </Link>
        </ul>
      </div>
    );
  }
  if (props.active === "info") {
    return (
      <div className="navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/info">
            <li className="active">Info</li>
          </Link>
        </ul>
      </div>
    );
  }
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/info">
          <li>Info</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
