import React from "react";
import "./HowDoesItWork.scss";
const HowDoesItWork = ({ logo, heading, content }) => {
  return (
    <div className="app__howDoes">
      <div className="app__howDoes-logo"><img src={logo} alt="" /></div>
      <div className="app__howDoes-content">
        <h4>{heading}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HowDoesItWork;
