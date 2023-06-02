import React from "react";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/doctor");
  };
  return (
    <div className={styles.display}>
      <div className={styles.patient}>DOCTOR DASHBOARD</div>
      <div className={styles.view}>
        <button className={styles.view1}>TODAY SCHEDULE</button>

        <button className={styles.view2} onClick={handleButtonClick}>
          PERSONAL DETAILS
        </button>

        <button className={styles.view3}>UPCOMING APPOINTMENTS</button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
