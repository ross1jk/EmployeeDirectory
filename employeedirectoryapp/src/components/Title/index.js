import React from "react";
import "./style.css";

function Title(props) {
  return(
  <div>
    <div class="jumbotron">
    <div class="row">
    <img id="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
        <h1 class="display-4">{props.children}</h1>
        </div>
    </div>
  </div>
  );
}

export default Title;
