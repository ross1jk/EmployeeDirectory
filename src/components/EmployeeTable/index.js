import EmployeeInfo from "../EmployeeInfo/index";
import "./style.css";
import React from "react";

function EmployeeTable(props) {
return (
      <div>
        <table className="table">
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
