import EmployeeInfo from "../EmployeeInfo/index";
import React from "react";

function StateSearch(props) {
return (
      <div>
        <table className="table">
          
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

        </table>
      </div>
    );
  }

export default StateSearch;