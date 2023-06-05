import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import PatientDetails from "./components/Patients/PatientDetails";
import DoctorDashboard from "./components/DoctorDashboard";
import DoctorDetails from "./components/Doctors/DoctorDetails";
import LoginPage from "./components/LoginPage";
import SearchDoctor from "./components/Search/searchDoctor";
import Selectdate from "./components/Patients/SelectDate";
import BookingSlot from "./components/Patients/BookingSlot";
import UserContext from "./context/user";
import AppointmentStatus from "./components/Patients/AppointmentStatus";
const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState();
  return (
    <UserContext.Provider
      value={{ accessToken, setAccessToken, role, setRole }}
    >
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/patient" element={<PatientDetails />} />
        <Route path="/search" element={<SearchDoctor />} />
        <Route path="/selectdate" element={<Selectdate />} />
        <Route path="/book-slot" element={<BookingSlot />} />
        <Route path="/appointment-status" element={<AppointmentStatus />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor" element={<DoctorDetails />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
