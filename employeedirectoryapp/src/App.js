import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeInfo from "./components/EmployeeInfo";

class App extends Component {
  
  render(){
    return(
      <Wrapper>
        <Title>Employee Directory</Title>
        <EmployeeInfo> test </EmployeeInfo>
      </Wrapper>
    )
  }
}

export default App;
