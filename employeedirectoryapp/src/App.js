import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import API from "../utils/API";
import EmployeeTable from "./components/EmployeeTable"

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <EmployeeTable />
      </Wrapper>
    );
  }
}

export default App;
