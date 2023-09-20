import React from "react";
import style from "./style.css";

const SubHeader = ({ active, handleActive }) => {
  return (
    <div className='subContainer'>
      <div className='titleBox'>
        <h4>Task</h4>
        <p>Clinical {">"} Tasks</p>
      </div>
      <div className="subHeads">
        <h6
          style={{
            borderBottom: !active && "3px solid #04095A",
            color: !active && "#04095A",
          }}
          onClick={() => handleActive(false)}
        >
          Upcoming Tasks
        </h6>
        <h6
          style={{
            borderBottom: active && "3px solid #04095A",
            color: active && "#04095A",
          }}
          onClick={() => handleActive(true)}
        >
          Completed Tasks
        </h6>
      </div>
    </div>
  );
};

export default SubHeader;
