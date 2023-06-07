import React, { useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import { fetchData } from "../../helpers/common";
import styles from "./Modal.module.css";
import UserContext from "../../context/user";

const OverLay = (props) => {
  const userCtx = useContext(UserContext);
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");

  const updatePatient = async (id) => {
    const { ok, data } = await fetchData(
      "/api/patients/" + id,
      userCtx.accessToken,
      "PATCH",

      {
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
      }
    );

    if (ok) {
      props.getPatients();
      props.setShowUpdateModal(false);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    emailRef.current.value = props.email;
    phoneNumberRef.current.value = props.phoneNumber;
  }, []);

  // 1st
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <br />

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Email</div>
          <input ref={emailRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">PhoneNumber</div>
          <input ref={phoneNumberRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <button onClick={() => updatePatient(props.id)} className="col-md-3">
            update
          </button>
          <button
            onClick={() => props.setShowUpdateModal(false)}
            className="col-md-3"
          >
            cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          id={props.id}
          email={props.email}
          phoneNumber={props.phoneNumber}
          setShowUpdateModal={props.setShowUpdateModal}
          getPatients={props.getPatients}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
