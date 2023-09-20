import React from "react";
import { NAV_ITEMS } from "../../constants";
import { Link } from "react-router-dom";
import "./style.css";
import Button from "../../Button";
import CheckedIcon from "../../assets/Icons/CheckedIcon";
import FAQIcon from "../../assets/Icons/FAQIcon";
import NotificationIcon from "../../assets/Icons/NotificationIcon";
import ToggleIcon from "../../assets/Icons/ToggleIcon";

const Navbar = () => {
  return (
    <>
      <div className="toggle">
        <ToggleIcon />
      </div>
      <nav className="nav">
        {NAV_ITEMS?.map((item) => (
          <Link>{item}</Link>
        ))}
      </nav>
      <div className="right-side">
        <Button className={"btn"}>
          <CheckedIcon /> Clocked-in
        </Button>
        <FAQIcon />
        <NotificationIcon />
        <div className="circle">MA</div>
        <h3>Account</h3>
      </div>
      <div className="mobileView">
        <div className="wrap">
          <select className="dropdown" name="" id="">
            {NAV_ITEMS?.map((item, i) => (
              <option selected={i == 3} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="circle">MA</div>
          <h3>Account</h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
