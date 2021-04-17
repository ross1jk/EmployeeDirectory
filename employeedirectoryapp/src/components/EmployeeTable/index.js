import React, { Component } from "react";
import EmployeeInfo from "../EmployeeInfo/index";
import axios from "axios";

class EmployeeTable extends Component {
    state = {
      employees: [],
    };
  
    componentDidMount() {
      axios.get("https://randomuser.me/api/?results=50").then((res) => {
        this.setState({
          employees: res.data.results,
        });
      });
    }
    
    render() {
    return(
    <div>
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
  
  {this.state.employees.map((employees) => (
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
    )
  }
}

export default EmployeeTable;