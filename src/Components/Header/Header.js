import React from "react";
import logo from "../../Media asset/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="" />
    </div>
  );
};

export default Header;
