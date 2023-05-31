import React from "react";
import styles from "./Dashboard.module.css";

const PatientDashboard = () => {
  return (
    <div className={styles.display}>
      <div className={styles.patient}>PATIENT DASHBOARD</div>
      <div className={styles.view}>
        <button className={styles.view1}>PERSONAL DETAILS</button>

        <button className={styles.view2}>SEARCH DOCTOR</button>
        <button className={styles.view3}>APPOINTMENT STATUS</button>
        <button className={styles.view4}>UPCOMING APPOINTMENTS</button>
      </div>
    </div>
  );
};

export default PatientDashboard;
