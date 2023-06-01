import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import PatientDetails from "./components/Patients/PatientDetails";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/patient" element={<PatientDetails />} />
    </Routes>
  );
};

export default App;
