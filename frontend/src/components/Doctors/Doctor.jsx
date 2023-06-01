import React, { useState } from "react";
import UpdateModal from "./UpdateModal";

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

      <div style={{ border: "2px solid black" }}>
        <div className="col-sm-3">{props.name}</div>
        <div className="col-sm-4">{props.email}</div>
        <div className="col-sm-3">{props.phoneNumber}</div>
        <div className="col-sm-3">{props.specialization}</div>

        <button className="col-sm-3" onClick={() => setShowUpdateModal(true)}>
          update
        </button>
      </div>
    </>
  );
};

export default Doctor;
