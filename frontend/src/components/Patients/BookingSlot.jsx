import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../helpers/common";
//import { useLocation } from "react-router-dom";
const BookingSlot = (date) => {
  // console.log(props.location.state)
  //const location = useLocation();
  //const { date } = location.state;
  // console.log("Date: " + date);
  //const [dateId, setdateId] = useState();
  const [slots, setSlots] = useState([]);

  const getSlots = async () => {
    const { ok, data } = await fetchData("/api/getslots", "POST", {
      id: "doctor003",
    });
    if (ok) {
      console.log(data.slots);
      setSlots(data.slots);
    } else {
      console.log(data);
    }
  };
  // setSlots("");
  useEffect(() => {
    getSlots();
  }, []);

  //     function getDateString() {
  //       const finalDate = date.getYear().toString();
  //       const month = date.getMonth() + 1;
  //       const day = date.getDate();

  //       if (month < 10) {
  //         finalDate += "-0" + month.toString();
  //       } else {
  //         finalDate += "-" + month.toString();
  //       }

  //       if (day < 10) {
  //         finalDate += "-0" + day.toString();
  //       } else {
  //         finalDate += "-" + day.toString();
  //       }

  //       return finalDate;
  //     }
  //     const dateToSend = getDateString();
  //     fetchDate(dateToSend);

  return (
    <div style={{ height: "100vh" }}>
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
                  <th scope="col">Slot</th>
                  <th scope="col">Booking Status</th>
                </tr>
              </thead>
              <tbody>
                {slots.map((slot) => (
                  <tr key={slot._id}>
                    <th scope="row">{slot.time}</th>
                    {slot.isBooked ? (
                      <td>Booked</td>
                    ) : (
                      <td>
                        <Link to="/appointment-status">Book Now</Link>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlot;
