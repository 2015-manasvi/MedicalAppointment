import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "../../helpers/common";
import Doctor from "./Doctor";
import styles from "./Modal.module.css";

const DoctorDetails = () => {
  const [doctor, setDoctor] = useState([]);

  const emailRef = useRef();
  const phoneRef = useRef();

  //   const getDoctors = async () => {
  //     const { ok, data } = await fetchData("/api/doctors");

  //     if (ok) {
  //       setDoctor(data);
  //     } else {
  //       console.log(data);
  //     }
  //   };

  //   useEffect(() => {
  //     getDoctors();
  //   }, []);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await fetchData("/api/doctors");
        if (response.length > 0) {
          const firstDoctor = response[0];
          setDoctor(firstDoctor);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getDoctors();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-4">Personal Details</h1>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col-md-3">Email</div>
        <div className="col-md-3">PhoneNumber</div>
        <div className="col-md-3">Specialization</div>
      </div>

      {doctor.map((item) => {
        return (
          <Doctor
            key={item._id}
            id={item._id}
            name={item.name}
            email={item.email}
            phoneNumber={item.phoneNumber}
            specialization={item.specialization}
            getDoctors={setDoctor}
          />
        );
      })}
    </div>
  );
};

export default DoctorDetails;

// import React, { useEffect, useState } from "react";
// import { fetchData } from "../../helpers/common";

// const DoctorDetails = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const selectedDoctorId = ""

//   useEffect(() => {
//     const getDoctors = async () => {
//       const { ok, data } = await fetchData("/api/doctors");

//       if (ok) {
//         setDoctors(data);
//       } else {
//         console.log(data);
//       }
//     };

//     getDoctors();
//   }, []);

//   useEffect(() => {
//     if (doctors.length > 0) {
//       const doctor = doctors.find((doctor) => doctor.id === selectedDoctorId);
//       setSelectedDoctor(doctor);
//     }
//   }, [doctors, selectedDoctorId]);

//   return (
//     <div>
//       {selectedDoctor ? (
//         <div>
//           <h1>{selectedDoctor.name}</h1>
//           <p>Email: {selectedDoctor.email}</p>
//           <p>Phone Number: {selectedDoctor.phoneNumber}</p>
//
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default DoctorDetails;
