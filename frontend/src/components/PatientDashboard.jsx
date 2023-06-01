import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import PatientDetails from "./Patients/PatientDetails";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  //const [personal, setShowPersonal] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    //setShowPersonal(true);
    navigate("/patient");
  };

  return (
    <div className={styles.display}>
      <div className={styles.patient}>PATIENT DASHBOARD</div>
      <div className={styles.view}>
        <div>
          <button className={styles.view1} onClick={handleButtonClick}>
            PERSONAL DETAILS
          </button>
        </div>
        <button className={styles.view2}>SEARCH DOCTOR</button>
        <button className={styles.view3}>APPOINTMENT STATUS</button>
        <button className={styles.view4}>UPCOMING APPOINTMENTS</button>
      </div>
    </div>
  );
};

export default PatientDashboard;