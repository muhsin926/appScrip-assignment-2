import React, { useState } from "react";
import Button from "../../Button";
import DownArrow from "../../assets/Icons/DownArrow";
import "./style.css";
import ClockIcon from "../../assets/Icons/ClockIcon";
import TaskIcon from "../../assets/Icons/TaskIcon";

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <h1>MedLife</h1>
      <div className="wrapper">
      <Button
        onClick={() => setClicked(!clicked)}
        className="commonBtn sidebarBtn "
      >
        Add Clinical <DownArrow />
      </Button>
      {clicked && (
        <>
          <Button className="commonBtn appointBtn"><ClockIcon/> Appointments </Button>
          <Button className="commonBtn taskBtn"><TaskIcon/> Tasks</Button>
        </>
      )}
      </div>
    </>
  );
};

export default Sidebar;
