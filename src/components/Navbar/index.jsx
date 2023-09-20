import React from "react";
import { NAV_ITEMS } from "../../constants";
import { Link } from "react-router-dom";
import "./style.css";
import Button from "../../Button";
import CheckedIcon from "../../assets/Icons/CheckedIcon";
import FAQIcon from "../../assets/Icons/FAQIcon";
import NotificationIcon from "../../assets/Icons/NotificationIcon";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        {NAV_ITEMS?.map((item) => (
          <Link>{item}</Link>
        ))}
      </nav>
      <div className="right-side">
        <Button className={'btn'}><CheckedIcon/> Clocked-in</Button>
        <FAQIcon/>
        <NotificationIcon/>
        <div className="profile">MA</div>
        <h3>Account</h3>
      </div>
    </>
  );
};

export default Navbar;
