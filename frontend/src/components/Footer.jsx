import React from "react";
import { Link } from "react-router-dom";
import styles from "./Patients/Modal.module.css";

const Footer = () => {
  return (
    <div className=" row text-light bg-dark" style={{ maxWidth: "100%" }}>
      <div className={styles.contact}> Boon keng </div>
      <div className={styles.contact}> singapore </div>

      <div className={styles.contact}>89764532</div>

      <div className={styles.link}>
        <ul>
          <li>
            <Link to="#!"> Facebook</Link>
          </li>
          <li>
            <Link to="#!">Instagram</Link>
          </li>
          <li>
            <Link to="#!">Twitter</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
