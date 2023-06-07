import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();

  //const location = useLocation();
  //console.log("location value:", location);
  //const { date, doctorName, slot } = location.state;
  const ShowPersonalDetail = () => {
    navigate("/patient");
  };
  const searchClick = () => {
    navigate("/search");
  };
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.display}>
      <div className={styles.patient}>PATIENT DASHBOARD</div>
      <div className={styles.view}>
        <div>
          <button className={styles.view1} onClick={ShowPersonalDetail}>
            PERSONAL DETAILS
          </button>
        </div>
        <button className={styles.view2} onClick={searchClick}>
          BOOKING APPOINTMENT
        </button>
        <div className={styles.centerd}>
          <button className={styles.button} onClick={handleClick}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
