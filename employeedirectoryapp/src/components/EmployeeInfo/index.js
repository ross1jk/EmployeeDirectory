import React from "react"; 

function EmployeeInfo(props){
  return(
    <div>
  <p>{props.children}</p> 
  
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

    <tr>
      <td>pic</td>
      <td>Jacqui Ross</td>
      <td>jross135</td>
      <td>Royal Oak, Mi</td>
    </tr>

  </tbody>

</table>
</div>
  );

}

export default EmployeeInfo; 