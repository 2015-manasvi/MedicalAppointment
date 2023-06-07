import React, { useState } from "react";
import UpdateModal from "./UpdateModal";
import styles from "./Modal.module.css";

const Doctor = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      {showUpdateModal && (
        <UpdateModal
          id={props.id}
          email={props.email}
          phoneNumber={props.phoneNumber}
          getDoctors={props.getDoctors}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}

      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.phoneNumber}</td>
          <td>{props.specialization}</td>

          <td>
            <button
              className={styles.button}
              onClick={() => setShowUpdateModal(true)}
            >
              Update
            </button>

            <button
              className={styles.button}
              onClick={() => props.deleteDoctor(props.id)}
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Doctor;
