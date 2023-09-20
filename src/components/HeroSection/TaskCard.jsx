import React from "react";
import Button from "../../Button";

const TaskCard = ({task, show}) => {
  return (
    <>
     { !show && <h6 className="taskDate">{task.fromDate}</h6>}
      <div className="taskCard">
        <div className="taskSender">
          <img src={task.profile} className="profile" alt="profile" />
          <div className="">
            <h6>{task.name}</h6>
            <p>AppointmentId : {task.appointmentId}</p>
            <p style={{ color: "rgba(55, 123, 255, 0.90)", fontWeight: 500 }}>
              {task.assessment}
            </p>
          </div>
        </div>
        <div className="taskInfo">
          <div>
            <p>Task ID:</p>
            <p>Date & Time: </p>
            <p>Duration: </p>
          </div>
          <div className="infoValues">
            <p>{task.taskId}</p>
            <p>{task.data_time}</p>
            <p>{task.duration}</p>
          </div>
        </div>
        <div className="taskAction">
         {!show && <p>
            Status{" "}
            <span
              className="status"
              style={{
                marginLeft: "5px",
                color: task.status == "Overdue" ? "#F44336" : "#00B071",
              }}
            >
              {task.status}
            </span>
          </p>}
          <Button className={"commonBtn actionBtn"}>
            {show ? 'View Assessment' : task.status == "Overdue"
              ? "Start Assessment"
              : "Continue Assessment"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
