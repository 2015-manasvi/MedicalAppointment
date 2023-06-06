import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Modal.module.css";

const AppointmentStatus = (props) => {
  const location = useLocation();
  //console.log("location value:", location);
  const { date, doctorName, slot } = location.state;
  console.log("datevalue here:", date);
  console.log("doctorName here:", doctorName);
  console.log("slot value:", slot);

  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div className="col-3 col-md-3 p-4 bg-white "></div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
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
            <button className={styles.button}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentStatus;
