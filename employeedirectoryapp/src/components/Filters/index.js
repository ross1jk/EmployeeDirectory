import React from "react";

function Filters(props) {
  return (
    <div>
            <select name="name" id="name" onChange={props.handleSort}>
              <option value="default">Name</option>
              <option value="A-Z">Alphabetical</option>
            </select>


            <div className="input-group mb-3">
              <input
                id="stateInput"
                type="text"
                className="form-control"
                placeholder="Location"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
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
