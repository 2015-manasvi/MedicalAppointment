import React from "react";

const SlotComponent = ({ slots }) => {
  return (
    <div>
      {slots.map((slot) => (
        <div key={slot._id}>
          <p>Time: {slot.time}</p>
          <p>Is Booked: {slot.isBooked ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default SlotComponent;
