import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import HeroSection from "../components/HeroSection";

const ClinicalPage = () => {
  const [completedTask, setCompletedTask] = useState(false);
  return (
    <main className="main">
      <div className="logo">lOGO</div>
      <header className="header">
        <Navbar />
      </header>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <section className="container">
        <SubHeader active={completedTask} handleActive={setCompletedTask} />
        <HeroSection show={completedTask} />
      </section>
    </main>
  );
};

export default ClinicalPage;
