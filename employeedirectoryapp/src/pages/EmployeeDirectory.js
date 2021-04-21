import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import EmployeeTable from "../components/EmployeeTable";

function EmployeeInfo() {
  return (
    <div>
      <Title>Employee Directory</Title>
      <Wrapper>
        <EmployeeTable />
      </Wrapper>
    </div>
  );
}
export default EmployeeInfo;
