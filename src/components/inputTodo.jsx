import React from "react";
// CSS in JS
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODO"
        // to add text for input
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onAdd}>
        Add
      </button>
    </div>
  );
};
