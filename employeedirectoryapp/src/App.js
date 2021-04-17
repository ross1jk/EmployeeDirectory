import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeInfo from "./components/EmployeeInfo";
import axios from 'axios';
//import API from "../utils/API"; 

class App extends Component {
  state = {
    employees: [ ]
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=50')
    .then(res => {
      //console.log(res)
      this.setState({
        employees: res.data.results
      })
    })
  }
  
  render(){
    return(
      <Wrapper>
        <Title>Employee Directory {console.log(this.state)}</Title>
        <EmployeeInfo> test </EmployeeInfo>
      </Wrapper>
    )
  }
}

export default App;