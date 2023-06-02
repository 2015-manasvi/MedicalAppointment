import React from "react";
import style from "./Search.module.css";

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
                  <span className="text-uppercase"> {item.name}</span>
                </h6>
              </div>
              <div>Specialization : {item.specialization}</div>
              <div>Phone Number : {item.phoneNumber}</div>
              <div className="row mb-0 pb-0">
                <div
                  className=" col align-self-end col-md-2 offset-md-3 inline"
                  style={{ textAlign: "center" }}
                >
                  <button className="btn btn-sm btn-primary"> Book</button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchResults;
