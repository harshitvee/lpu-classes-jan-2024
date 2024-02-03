import { useState } from "react";
const CREATE_ENDPOINT = "http://localhost:8000/api/v1/todos";
import axios from "axios";
function AddTodoForm({ fetchTodos }) {
  const [title, setTitle] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      title: title,
      completed: false,
    };
    try {
      await axios.post(CREATE_ENDPOINT, newTodo, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      await fetchTodos();
      setTitle("");
      // refetch all todos
      //   update todos
    } catch (error) {
      console.log(error);
    }

    // add data to server
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo-title"
        id="todo-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTodoForm;
