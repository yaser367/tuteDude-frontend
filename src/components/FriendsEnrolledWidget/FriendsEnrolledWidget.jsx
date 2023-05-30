import React from "react";
import "./FriendsEnrolledWidget.scss";

const FriendsEnrolledWidget = ({ enrolled, name, date, amount, courses }) => {
  return (
    <div className="app__enrolled-widget">
      <div className="dateAndName">
        <h4 className="enrolled-name">{name}</h4>
        <h4 className="enrolled-date">{date}</h4>
      </div>
      <h4 className="enrolled-name">Course Enrolled({enrolled})</h4>
      <div className="courses">
        {courses.map((course) => (
          <div className="course">
            <h4>{course}</h4>
          </div>
        ))}
      </div>
      <p>Referral Amount &#8377;{amount} </p>
    </div>
  );
};

export default FriendsEnrolledWidget;
