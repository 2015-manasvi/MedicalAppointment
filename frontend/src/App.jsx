import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import PatientDetails from "./components/Patients/PatientDetails";
import DoctorDashboard from "./components/DoctorDashboard";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SearchDoctor from "./components/Search/searchDoctor";
const App = () => {
  return <SearchDoctor />;
};

export default App;
