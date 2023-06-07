import React from "react";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/doctor");
  };
  const handleClick = () => {
    navigate("/schedule");
  };
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className={styles.display}>
      <div className={styles.patient}>ADMIN DASHBOARD</div>
      <div className={styles.view}>
        <button className={styles.view2} onClick={handleButtonClick}>
          DOCTOR DETAILS
        </button>

        <button className={styles.view3} onClick={handleClick}>
          APPOINTMENT DETAILS
        </button>
        <div className={styles.centerd}>
          <button className={styles.button} onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
