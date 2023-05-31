import React from "react";
import { useContext, useState } from "react";
import PatientDashboard from "./PatientDashboard";
import UserContext from "../context/user";
import PageContext from "../context/page";
import DoctorDashboard from "./DoctorDashboard";

const HomePage = () => {
  const userCtx = useContext(UserContext);

  return (
    <div className={styles.HomePage}>
      {userCtx.role == "patient" && <PatientDashboard />}
      {userCtx.role == "doctor" && <DoctorDashboard />}
    </div>
  );
};

export default HomePage;
