import EmployeeInfo from "../EmployeeInfo/index";
import "./style.css";
import React from "react";

function EmployeeTable(props) {
return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">
                <select name="name" id="name" onChange={props.handleSort}>
                 <option value="default">Name</option>
                 <option value="A-Z">Alphabetical</option>
               </select>
               </th>
              <th scope="col">Email</th>

              <th scope="col">

              <div className="input-group mb-3">
              <input id="stateInput" type="text" className="form-control" placeholder="Location" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={props.handleStateInput}>Button</button>
              </div>
              </div>


              </th>

            </tr>
          </thead>
          <tbody>
          
            {props.employees.map((employees) => (
              <EmployeeInfo
                pic={employees.picture.medium}
                nameLast={employees.name.last}
                nameFirst={employees.name.first}
                email={employees.email}
                city={employees.location.city}
                state={employees.location.state}
              />
            ))}
          
          </tbody>
        </table>
      </div>
    );
  }

export default EmployeeTable;
