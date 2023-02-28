import React from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function Todos(props) {
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <div className="container">
      <div className="todoContainer">
        <h3>Title: {props.title}</h3>
        <p>Description: {props.description}</p>
      </div>
      <div>
        <MdOutlineDelete
        className="dlt-btn"
          onClick={() => {
            handleClick(props.id);
          }}
        />
      </div>
    </div>
  );
}
