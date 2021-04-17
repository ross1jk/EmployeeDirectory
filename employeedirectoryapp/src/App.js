import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeInfo from "./components/EmployeeInfo";
import axios from 'axios';
//import API from "../utils/API"; 

class App extends Component {
  //state = {}

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=100?format=PrettyJSON')
    .then(res => {
      console.log(res)
    })
  }
  
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