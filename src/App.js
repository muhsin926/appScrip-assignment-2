import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClinicalPage from "./pages/ClinicalPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClinicalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
