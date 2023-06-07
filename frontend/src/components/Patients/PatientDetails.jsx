import React, { useEffect, useRef, useState, useContext } from "react";
import { fetchData } from "../../helpers/common";
import Patient from "./patient";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/user";

const PatientDetails = () => {
  const userCtx = useContext(UserContext);
  const [patient, setPatient] = useState([]);

  const emailRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const getPatients = async () => {
    const { ok, data } = await fetchData("/api/patients", userCtx.accessToken);

    if (ok) {
      setPatient(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <>
      <div className={styles.h1}>
        <h1>PERSONAL DETAILS</h1>
      </div>
      <div className={styles.App}>
        <br />
        <br />

        <table className={styles.ptable}>
          <thead>
            <tr>
              <th className={styles.head}>Name</th>
              <th className={styles.head}>Email</th>
              <th className={styles.head}>PhoneNumber</th>
            </tr>
          </thead>
          {patient.map((item) => {
            return (
              <Patient
                key={item._id}
                id={item._id}
                name={item.name}
                email={item.email}
                phoneNumber={item.phoneNumber}
                getPatients={getPatients}
              />
            );
          })}
          <div className={styles.centered}>
            <button className={styles.button} onClick={goBack}>
              Back
            </button>
          </div>
        </table>
      </div>
    </>
  );
};

export default PatientDetails;
