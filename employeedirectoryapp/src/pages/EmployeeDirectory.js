import React, { Component } from "react";
import API from "../utils/API"
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import EmployeeTable from "../components/EmployeeTable";
import StateSearch from "../components/StateSearch"
import Filters from "../components/Filters"

class EmployeeDirectory extends Component {
    state = {
      search: "",
      employees: [],
      results: []
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
  
      handleStateInput = () => {
        const choice = document.getElementById("stateInput"); 
        const data = this.state.employees; 
        return this.setState({ results: data.filter(employee => employee.location.state === choice.value) })
      }

  render(){
  return (
    <div>
      <Title>Employee Directory</Title>
      <Wrapper>

      <Filters 
        handleSort={this.handleSort}
        handleStateInput={this.handleStateInput}

      />

      <StateSearch 
          employees={this.state.results}
        />
        
        <EmployeeTable 
          employees={this.state.employees}
        />

      </Wrapper>
    </div>
  );
}
}
export default EmployeeDirectory;
