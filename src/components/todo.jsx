import React, { useState } from "react";

function Todo(props) {
  var [item, fnItem] = useState("none");

  function clicked() {
    fnItem("line-through");
  }

  return (
    <li style={{ textDecoration: item }} onClick={clicked}>
      {props.name}
    </li>
  );
}

export default Todo;
