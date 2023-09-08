import React from "react";
import "./search.css";

export default function Search() {
  return (
    <form className="mt-5 mb-5">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control"
            placeholder="Enter your City here"
          />{" "}
        </div>
        <div className="col-3">
          <input
            className="btn btn-primary w-100"
            type="Submit"
            value="Search 🔍"
          />
        </div>
      </div>
    </form>
  );
}
