import EmployeeInfo from "../EmployeeInfo/index";
import "./style.css";
import React, { Component } from "react";
import API from "../../utils/API";
import Search from "../Search";

class EmployeeTable extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getEmployee().then((res) =>
      this.setState({ employees: res.data.results })
    );
  }

  handleSort = (event) => {
    const sort = event.target.value;
    const data = this.state.employees
    if(sort === "A-Z"){
      data.sort(function(a, b) {
        if(a.name.last.toLowerCase() < b.name.last.toLowerCase()) return -1; 
        if(a.name.last.toLowerCase() > b.name.last.toLowerCase()) return 1; 
        return 0; 
      })
      this.setState({
        employees: data
      })
      }
    }
  
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">
                <select name="name" id="name" onChange={this.handleSort}>
                 <option value="default">Name</option>
                 <option value="A-Z">Alphabetical</option>
               </select>
               </th>
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
    );
  }
}

export default EmployeeTable;
