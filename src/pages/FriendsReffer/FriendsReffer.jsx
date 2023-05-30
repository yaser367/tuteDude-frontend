import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import FriendsEnrolledWidget from "../../components/FriendsEnrolledWidget/FriendsEnrolledWidget";

import "./FriendsReffer.scss";

const FriendsReffer = () => {
  let course1 = ["Ui/Ux", "Photoshop", "Illustrator", "Python", "MERN", "Java"];
  let course2 = [
    "Ui/Ux",
    "Photoshop",
    "Illustrator",
    "Python",
    "MERN",
    "Java",
    "C++",
  ];
  return (
    <>
      <Navbar />
      <div className="app__friendsReffer">
        <h4>UI/UX &gt; Refer & Earn &gt; Friends Reffered</h4>
        <div className="app__friendsReffer-root">
          <AiOutlineArrowLeft /> <p>go back </p>
        </div>
        <div className="app__friendsReffer-reffer">
          <div className="app__friendsReffer-refferalCode">
            <h4>Your Refferal Code</h4>
            <div>
              <p>EDCH54</p>
            </div>
          </div>
          <div className="app__friendsReffer-balance">
            <h4>Wallet Balance</h4>
            <p>&#8377;500</p>
          </div>
        </div>
        <p className="p">
          Friends Who Enrolled<span>(3)</span>
        </p>
        <div className="app__friendsReffer-enrolled">
          <div className="app__friendsReffer-enrolled-wid">
          <FriendsEnrolledWidget
            enrolled="6"
            courses={course1}
            name="Dhiraj Saxsena"
            date="14 Sep, 2022"
            amount="185"
          />
          </div>
          <div className="app__friendsReffer-enrolled-wid">
          <FriendsEnrolledWidget
            enrolled="6"
            courses={course1}
            name="Dhiraj Saxsena"
            date="14 Sep, 2022"
            amount="185"
          />
          </div>
          <div className="app__friendsReffer-enrolled-wid">
          <FriendsEnrolledWidget
            enrolled="6"
            courses={course1}
            name="Dhiraj Saxsena"
            date="14 Sep, 2022"
            amount="185"
          />
          </div>
  
       
        </div>
        <div className="app__friendsReffer-footer">
          <h4>Terms & Conditions</h4>
        </div>
      </div>
    </>
  );
};

export default FriendsReffer;
