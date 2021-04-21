import React from "react";
import "./style.css";

function Title(props) {
  return(
  <div>
    <div class="jumbotron">
        <h1 class="display-4">{props.children}</h1>
    </div>
  </div>
  );
}

export default Title;
