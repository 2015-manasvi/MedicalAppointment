import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import styles from "./Modal.module.css";
import BookingSlot from "./BookingSlot";
import { useLocation } from "react-router-dom";

const Selectdate = (props) => {
  const [date, setDate] = useState(new Date());
  //const { date: selectedDate } = useParams();
  const location = useLocation();
  const doctorName = location.state && location.state.doctorName;
  console.log(doctorName);
  //const renderAnotherComponent = <BookingSlot date={date} />;
  const onChange = (date) => {
    setDate(date);
  };
  const pervious = new Date();
  pervious.setDate(pervious.getDate() - 1);
  return (
    <div className="white" style={{ height: "100vh" }}>
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div
            className="col-3 col-md-3 p-4 bg-white "
            style={{ height: "80vh" }}
          ></div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <div className="d-flex justify-content-center">
              <div>
                <Calendar
                  tileDisabled={({ date }) =>
                    date.getDay() === 0 || date < pervious
                  }
                  onChange={onChange}
                  value={date}
                />
                {console.log(date)}
                <p className="text-center">
                  {date.getFullYear().toString() +
                    "-" +
                    (date.getMonth() + 1).toString() +
                    "-" +
                    date.getDate().toString()}
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-5 ml-5">
              <div>
                <Link to="/search">
                  <button className={styles.button1}>GO BACK</button>
                </Link>
              </div>
              <br />
              <div>
                <Link to={{ pathname: "/book-slot", state: { date: date } }}>
                  {/* <Link to="/book-slot">*/}
                  <button className={styles.button2}>Confirm</button>
                </Link>
                {/*{renderAnotherComponent}*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectdate;
