import React from "react";
import styles from "./Dashboard.module.css";

const DoctorDashboard = () => {
  return (
    <div className={styles.display}>
      <div className={styles.patient}>DOCTOR DASHBOARD</div>
      <div className={styles.view}>
        <button className={styles.view1}>TODAY SCHEDULE</button>

        <button className={styles.view2}>PERSONAL DETAILS</button>

        <button className={styles.view3}>UPCOMING APPOINTMENTS</button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
