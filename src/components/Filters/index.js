import React from "react";
import "./style.css";

function Filters(props) {
  return (
    <div>
      <button
        name="name"
        className="btn"
        type="button"
        id="name"
        value="A-Z"
        onClick={props.handleSort}
      >
        Sort Alphabetical
      </button>

      <div className="input-group mb-3">
        <input
          id="nameInput"
          type="text"
          className="form-control"
          placeholder="Search by (First) Name"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn"
            type="button"
            id="button-addon2"
            onClick={props.handleNameInput}
          >
            Search
          </button>
        </div>
      </div>

      <div className="input-group mb-3">
        <input
          id="lastNameInput"
          type="text"
          className="form-control"
          placeholder="Search by (Last) Name"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn"
            type="button"
            id="button-addon2"
            onClick={props.handleLastNameInput}
          >
            Search
          </button>
        </div>
      </div>

      <div className="input-group mb-3">
        <input
          id="stateInput"
          type="text"
          className="form-control"
          placeholder="Search by State"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn"
            type="button"
            id="button-addon2"
            onClick={props.handleStateInput}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Filters;
