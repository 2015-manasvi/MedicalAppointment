import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "../../helpers/common";
import Patient from "./patient";
import styles from "./Modal.module.css";

const PatientDetails = () => {
  const [patient, setPatient] = useState([]);

  const emailRef = useRef();
  const phoneRef = useRef();

  const getPatients = async () => {
    const { ok, data } = await fetchData("/api/patients");

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
    <div className="container">
      <div className="row">
        <h1 className="col-md-4">Personal Details</h1>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-md-4">Name</div>
        <div className="col-md-4">Email</div>
        <div className="col-md-4">PhoneNumber</div>
      </div>

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
    </div>
  );
};

export default PatientDetails;
