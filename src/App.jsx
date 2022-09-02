import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  // to add text for input
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // to add TODO to Incomlete list
  const onClickAdd = () => {
    // if TODO is null can't add in Incomplete list
    if (todoText === "") return;
    // to create new array for input todoText
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // to delete TODO from Incomplete list
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // using splice
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // to complete TODO from Incopmplete list
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // using splice
    newIncompleteTodos.splice(index, 1);

    //to create new complete TODO
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // ro return TODO from Complete list
  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>Max 5 TODO</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        clickComplete={onClickComplete}
        clickDelete={onClickDelete}
      />
      <CompleteTodos
        todosComplete={completeTodos}
        clickReturn={onClickReturn}
      />
    </>
  );
};
