import React from "react";

const ToDo = ({ todo, handleDelete, handleCheckCompleted }) => {
  return (
    <div>
      <li className="list-group-item">
        <div className="row justify-content-between">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckCompleted(todo.id)}
          ></input>
          {todo.title}
        </div>
        <button
          disabled={!todo.completed}
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => handleDelete(todo.id)}
        ></button>
      </li>
    </div>
  );
};

export default ToDo;
