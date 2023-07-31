import React, { FormEvent, useState } from "react";
import { useToDo } from "../store/todoContext";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useToDo();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add+</button>
    </form>
  );
};

export default AddToDo;