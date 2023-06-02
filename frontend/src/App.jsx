import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import PatientDetails from "./components/Patients/PatientDetails";
import DoctorDashboard from "./components/DoctorDashboard";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />*/}
      <Route exact path="/" element={<DoctorDashboard />} />
      <Route path="/doctor" element={<DoctorDetails />} />
    </Routes>
  );
};

export default App;
