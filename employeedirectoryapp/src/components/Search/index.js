import React from "react"; 
//import "./style.css"

function Search() {
  return(
      <div>
      {/* filter */}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Filter</button>
  </div>
  <select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Filter by...</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div>

{/* sort */}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Sort</button>
  </div>
  <select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Sort by...</option>
    <option value="name">Name</option>
    <option value="location">Location</option>
  </select>
</div>
</div>
  );
  }

export default Search;