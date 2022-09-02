import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, clickComplete, clickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => clickComplete(index)}>complete</button>
              <button onClick={() => clickDelete(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
