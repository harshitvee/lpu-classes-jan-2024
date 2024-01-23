import { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      completed: false,
    };
    addTodo(newTodo);
    setTodoTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-title-input"
        id="todo-title-input"
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

// form
// input : controlled by react
// submit event : grab input value , create new Todo , add new todo to app state
// interlude
export default AddTodoForm;
