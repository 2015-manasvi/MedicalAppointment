import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import PatientDetails from "./Patients/PatientDetails";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  //const [personal, setShowPersonal] = useState(false);
  const navigate = useNavigate();
  const ShowPersonalDetail = () => {
    //setShowPersonal(true);
    navigate("/patient");
  };
  const searchClick = () => {
    navigate("/search");
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
          SEARCH DOCTOR
        </button>

        <button className={styles.view4}>UPCOMING APPOINTMENTS</button>
      </div>
    </div>
  );
};

export default PatientDashboard;
