import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../helpers/common";
import { useLocation } from "react-router-dom";
const BookingSlot = (props) => {
  const location = useLocation();
  //console.log("location value:", location);
  const { date, doctorName } = location.state;
  //const doctorName = location.state;
  console.log("doctor Name:", doctorName);
  console.log("Date value: ", date);
  //const [dateId, setdateId] = useState();
  const [slots, setSlots] = useState([]);

  const getSlots = async () => {
    const { ok, data } = await fetchData("/api/getslots", undefined, "POST", {
      id: "doctor003",
    });
    if (ok) {
      console.log(data.slots);
      setSlots(data.slots);
    } else {
      console.log(data);
    }
  };

  // const handleSlotSelection = (selectedSlot) => {
  //   const updatedSlots = slots.map((slot) => {
  //     if (slot.time === selectedSlot) {
  //       return { ...slot, isBooked: true };
  //     }
  //     return slot;
  //   });
  //   setSlots(updatedSlots);
  // };

  // onClick={() => handleSlotSelection(slot.time)}
  // disabled={slot.isBooked} // Add disabled attribute

  useEffect(() => {
    getSlots();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div className="row m-5" style={{ maxWidth: "100%" }}>
          <div className="col-3 col-md-3 p-4"></div>
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
                        <Link
                          to={{
                            pathname: "/appointment-status",
                          }}
                          state={{
                            date: location.state.date,
                            doctorName: location.state.doctorName,
                            slot: slot.time,
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
