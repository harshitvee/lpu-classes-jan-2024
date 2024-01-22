import { useState } from "react";

// onSubmit --> Form event

function AddTodoForm() {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    // prevent page refresh
    e.preventDefault();
    console.log(title);
  }
  function handleChange(e) {
    setTitle(e.target.value);
  }

  // handleSubmit call on ---> Add button click / enter hit
  return (
    <form onSubmit={handleSubmit} method="post">
      <input
        type="text"
        name="todo-title"
        id="todo-title"
        placeholder="type new todo here ..."
        value={title}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTodoForm;
