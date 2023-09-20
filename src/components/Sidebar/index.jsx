import React, { useState } from "react";
import Button from "../../Button";
import DownArrow from "../../assets/Icons/DownArrow";
import "./style.css";

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
          <Button className="commonBtn appointBtn">Appointments</Button>
          <Button className="commonBtn taskBtn">Tasks</Button>
        </>
      )}
      </div>
    </>
  );
};

export default Sidebar;
