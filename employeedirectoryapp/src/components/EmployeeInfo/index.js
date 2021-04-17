import React from "react"; 

function EmployeeInfo(props) {
  return(
    <div>
  <p>{props.children}</p> 
  
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  
  <tbody>

    <tr>
      <td><img src={props.pic} alt="employee" /></td>
      <td>{props.nameLast}, {props.nameFirst}</td>
      <td>{props.email}</td>
      <td>{props.city}, {props.state}</td>
    </tr>

  </tbody>

</table>
</div>
  );
  }

export default EmployeeInfo; 