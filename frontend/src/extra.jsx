import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import PatientDetails from "./components/Patients/PatientDetails";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PatientDashboard />} />
      <Route path="/patient" element={<PatientDetails />} />
    </Routes>
  );
};

export default App;
