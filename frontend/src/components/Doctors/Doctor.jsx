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
        </tr>
      </tbody>
      <div className={styles.centered}>
        <button
          className={styles.button}
          onClick={() => setShowUpdateModal(true)}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Doctor;
