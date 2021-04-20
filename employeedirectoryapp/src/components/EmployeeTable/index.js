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
    const data = this.state.employees; 
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

    handleState = () => {
      const choice = document.getElementById("stateInput"); 
      const data = this.state.employees; 
      let filtered = data.filter(employee => employee.location.state === choice.value)
      console.log(filtered); 
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

              <th scope="col">

              <div class="input-group mb-3">
              <input id="stateInput" type="text" class="form-control" placeholder="Location" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleState}>Button</button>
              </div>
              </div>


              </th>

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
