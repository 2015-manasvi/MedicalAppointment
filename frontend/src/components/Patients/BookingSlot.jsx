import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../helpers/common";
const BookingSlot = (props) => {
  // console.log(props.location.state)
  // const { date, doctor } = props.location.state;
  // console.log("Date: " + date + " DoctorId: " + doctorId);
  const [dateId, setdateId] = useState();
  const [Slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchDate = async (dateToPost) => {
      const { data } = await fetchData("/api/get-slots", {
        id: doctor.id,
        date: dateToPost,
      });
      console.log(data);
      setdateId(data.id);
      setSlots(data.slots);
    };

    function getDateString() {
      let finalDate = date.getFullYear().toString();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      if (month < 10) {
        finalDate += "-0" + month.toString();
      } else {
        finalDate += "-" + month.toString();
      }

      if (day < 10) {
        finalDate += "-0" + day.toString();
      } else {
        finalDate += "-" + day.toString();
      }

      return finalDate;
    }
    const dateToSend = getDateString();
    fetchDate(dateToSend);
  }, []);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
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
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Slot</th>
                  <th scope="col">Booking Status</th>
                </tr>
              </thead>
              <tbody>
                {Slots.map((slot) => (
                  <tr key={slot.id}>
                    <th scope="row">{slot.time}</th>
                    {slot.isBooked ? (
                      <td>Booked</td>
                    ) : (
                      <td>
                        <Link
                          to={{
                            pathname: "/patient/payment",
                            data: {
                              dateId: dateId,
                              doctor: doctor,
                              slotId: slot.id,
                            },
                          }}
                        >
                          Book Now
                        </Link>
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
