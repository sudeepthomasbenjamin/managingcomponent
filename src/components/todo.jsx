import React, { useState } from "react";

function Todo(props) {
  var [item, fnItem] = useState(false);

  function clicked() {
    fnItem((prevItem) => {
      return !prevItem;
    });
  }

  return (
    <li
      style={{ textDecoration: item ? "line-through" : "none" }}
      onClick={clicked}
    >
      {props.name}
    </li>
  );
}

export default Todo;
