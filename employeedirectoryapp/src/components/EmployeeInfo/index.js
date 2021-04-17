import React from "react"; 
import "./style.css"

function EmployeeInfo(props) {
  return(
  <div>
    <tr>
      <td><img src={props.pic} alt="employee" /></td>
      <td>{props.nameLast}, {props.nameFirst}</td>
      <td>{props.email}</td>
      <td>{props.city}, {props.state}</td>
    </tr>
</div>
  );
  }

export default EmployeeInfo; 