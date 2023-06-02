import React, { useState } from "react";
import UpdateModal from "./UpdateModal";
import styles from "./Modal.module.css";

const Patient = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      {showUpdateModal && (
        <UpdateModal
          id={props.id}
          email={props.email}
          phoneNumber={props.phoneNumber}
          getPatients={props.getPatients}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.phoneNumber}</td>
        </tr>
      </tbody>
      <div className={styles.centered}>
        <button
          className={styles.button}
          onClick={() => setShowUpdateModal(true)}
        >
          update
        </button>
      </div>
    </>
  );
};

export default Patient;
