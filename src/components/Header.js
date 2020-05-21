import React from "react";
import { MdLocationCity } from "react-icons/md";
//

const Header = () => {
  return (
    <div className="header">
      <MdLocationCity style={{ fontSize: "45px" }} />
      <h1>QuizCity</h1>
    </div>
  );
};

export default Header;
