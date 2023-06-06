import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Modal.module.css";

const AppointmentStatus = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log("location value:", location);
  const { date, doctorName, slot } = location.state;
  console.log("datevalue here:", date);
  console.log("doctorName here:", doctorName);
  console.log("slot value:", slot);
  const handleButtonClick = () => {
    navigate("/patient-dashboard");
  };

  return (
    <div>
      <div className={styles.h1}>
        <h2>Appointment Confirmation</h2>
      </div>
      <div>
        <div className="row m-4" style={{ maxWidth: "100%" }}>
          <div className="col-3 col-md-3 p-4  "></div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "60vh",
              backgroundColor: "#6c757d",
            }}
          >
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th className={styles.head}>Date</th>
                  <th className={styles.head}>Time</th>
                  <th className={styles.head}>Doctor Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-md-2">{date.toLocaleDateString()}</td>
                  <td className="col-md-2">{slot}</td>
                  <td className="col-md-2">{doctorName}</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.centered}>
              <button className={styles.button} onClick={handleButtonClick}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentStatus;
