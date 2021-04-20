import React, { useState } from "react";
// import "./style.css"

function Search(props) {
  return (
    <div>
      <button
        onClick={props.handleInputChange}
        type="button"
        class="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Sort Name
      </button>
    </div>
  );
}

export default Search;

//     <input value={props.search} onChange={props.handleInputChange} class="form-control" id="myInput" type="text" placeholder="Search.." />
