import React from "react";

export const CompleteTodos = (props) => {
  const { todosComplete, clickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete</p>
      <ul>
        {todosComplete.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => clickReturn(index)}>return</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
