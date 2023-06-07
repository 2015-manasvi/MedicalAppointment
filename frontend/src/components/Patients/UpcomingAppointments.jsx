import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../helpers/common";
import { useLocation } from "react-router-dom";
import styles from "./Modal.module.css";
import UserContext from "../../context/user";

const UpcomingAppointments = () => {
  const userCtx = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location value:", location);
  const { date, doctorName, slot } = location.state;
  //const doctorName = location.state;
  //console.log("doctor Name:", doctorName);
  //console.log("Date value: ", date);
  const [appointment, setAppointment] = useState([]);
  const [selectedAppointments, setSelectedAppointments] = useState([]);

  const getAppointment = async () => {
    const { ok, data } = await fetchData("/api/appointment");
    if (ok) {
      console.log(data);
      setAppointment(data);
      setSelectedAppointments(data);
    } else {
      console.log(data);
    }
  };
  const handleClick = () => {
    navigate("/patient-dashboard");
  };

  const handleDelete = (id) => {
    const updatedAppointments = selectedAppointments.filter(
      (appointment) => appointment._id !== id
    );
    setSelectedAppointments(updatedAppointments);
  };
  const cancelAppointment = async (id) => {
    const { ok, data } = await fetchData(
      "/api/appointment/" + id,
      userCtx.accessToken,
      "DELETE"
    );

    if (ok) {
      getAppointment();
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    // addNewAppointment();
    getAppointment();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div className={styles.h1}>
        <h2>Upcoming Appointments</h2>
      </div>
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
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th className={styles.head}>Date</th>
                  <th className={styles.head}>SlotTime</th>
                  <th className={styles.head}>DoctorName</th>
                </tr>
              </thead>
              <tbody>
                {appointment.slice(0, 3).map((item) => (
                  <tr key={item._id}>
                    <td>{item.date}</td>
                    <td>{item.slotTime}</td>
                    <td>{item.doctorName}</td>
                    <td>
                      <button
                        className={styles.button}
                        onClick={() => cancelAppointment(item._id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
                {selectedAppointments.map((item) => (
                  <tr key={item._id}>
                    <td>{item.date}</td>
                    <td>{item.slotTime}</td>
                    <td>{item.doctorName}</td>
                    <td>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(item._id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td>{date.toLocaleDateString()}</td>
                  <td>{slot}</td>
                  <td>{doctorName}</td>
                  <td>
                    <button
                      className={styles.button}
                      onClick={() => handleDelete(item._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.centered}>
              <Link to="/patient-dashboard">
                <button className={styles.button}>GOBACK DASHBOARD</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
