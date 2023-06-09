import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return (
      <h5 style={{ textAlign: "center" }}>Please Enter Valid Doctor Name</h5>
    );
  }

  return (
    <div className="row">
      {results.map((item) => (
        <div className="col-sm-6 mb-2" key={item.id}>
          <div className="card">
            <div className="card-body">
              <div className="text-info">
                <h6>
                  Doctor Name:
                  <span className="text-uppercase">{item.name}</span>
                </h6>
              </div>
            </div>

            <div>
              <b>Email:</b>
              {item.email}
            </div>
            <div>
              <b>DoctorId:</b>
              {item.id}
            </div>
            <div>
              <b>Specialization : </b>
              {item.specialization}
            </div>
            <div>
              <b>Phone Number : </b>
              {item.phoneNumber}
            </div>
            <div className="row mb-0 pb-0">
              <div
                className=" col align-self-end col-md-2 offset-md-3 inline"
                style={{ textAlign: "center" }}
              >
                <Link
                  to={{
                    pathname: "/selectdate",
                  }}
                  state={{ doctorName: item.name, doctorId: item.id }}
                >
                  <button className="btn btn-sm btn-primary"> Book</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchResults;
