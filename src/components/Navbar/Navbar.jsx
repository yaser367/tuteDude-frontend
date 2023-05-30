import React from "react";

import "./Navbar.scss";
import Logo from "../../assets/image 2.png";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="app__nav">
      <div className="nav__logo">
        <img className="nav__logo-img" src={Logo} alt="" />
      </div>
      <div className="nav__text">
        <p>My Assignment</p>
        <p>Chat with mentor</p>
        <div className="nav__profile">
          <CgProfile size={21} /> <p>ProfileName</p>{" "}
          <IoIosArrowDown size={20} />
        </div>
      </div>
      <div className="nav__dropdown">
        <select className="nav__dowpdown-selection">
          <option value="">ProfileName</option>
          <option value="">hey</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
