import React, { useEffect, useRef, useState, useContext } from "react";
import { fetchData } from "../../helpers/common";
import Doctor from "./doctor";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/user";

const DoctorDetails = () => {
  const userCtx = useContext(UserContext);
  const [doctor, setDoctor] = useState([]);

  const emailRef = useRef();
  const phoneRef = useRef();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const getDoctors = async () => {
    const { ok, data } = await fetchData("/api/doctors", userCtx.accessToken);

    if (ok) {
      setDoctor(data);
    } else {
      console.log(data);
    }
  };
  const deleteDoctor = async (id) => {
    const { ok, data } = await fetchData(
      "/api/doctors/" + id,
      userCtx.accessToken,
      "DELETE"
    );

    if (ok) {
      getDoctors();
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      <div>
        <br />
        <br />

        <table>
          <thead>
            <tr>
              <th className={styles.head}>NAME</th>
              <th className={styles.head}>EMAIL</th>
              <th className={styles.head}>PHONENUMBER</th>
              <th className={styles.head}>SPECIALIZATION</th>
            </tr>
          </thead>
          {doctor.map((item) => {
            return (
              <Doctor
                key={item._id}
                id={item._id}
                name={item.name}
                email={item.email}
                phoneNumber={item.phoneNumber}
                specialization={item.specialization}
                getDoctors={getDoctors}
                deleteDoctor={deleteDoctor}
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

export default DoctorDetails;
