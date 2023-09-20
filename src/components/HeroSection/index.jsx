import React from "react";
import "./style.css";
import Button from "../../Button";
import SearchIcon from "../../assets/Icons/SearchIcon";
import CalenderIcon from "../../assets/Icons/CalenderIcon";
import FilterIcon from "../../assets/Icons/FilterIcon";
import { UP_COMING_TASK } from "../../constants";
import TaskCard from "./TaskCard";

const HeroSection = ({ show }) => {
  return (
    <section className="heroContainer">
      <div className="outerBox">
        <div className="buttons">
          <Button className="commonBtn searchBtn">
            <SearchIcon />
            <input type="text" placeholder="Search" className="searchInput" />
          </Button>
          <div>
            <Button className={"commonBtn"}>
              <CalenderIcon /> From date
            </Button>
            to
            <Button className={"commonBtn"}>
              <CalenderIcon /> To date
            </Button>
          </div>
          <div>
            <Button className={"commonBtn apply"}>Apply</Button>
            to
            <Button className={"commonBtn rest"}>Rest</Button>
          </div>
          <Button className={"commonBtn filter"}>
            <FilterIcon /> Filter
          </Button>
        </div>
        <div className="outerCard">
          {UP_COMING_TASK.map((task) => (
            <TaskCard key={task.appointmentId} task={task} show={show} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
