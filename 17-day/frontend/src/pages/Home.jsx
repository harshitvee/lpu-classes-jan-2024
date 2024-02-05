import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoForm from "../ components/AddTodoForm";
// tomorrow will finish this todos app

// blog app express js
// authentication
// frontend

// bug :

// homework

// Ecommerece

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    console.log("fetch todos");
    const response = await axios.get("http://localhost:8000/api/v1/todos");
    const data = response.data;
    setTodos(data);
  }

  async function handleDelete(id) {
    console.log("inside handleDelete", id);
    const deleteUrl = `http://localhost:8000/api/v1/todos/${id}`;

    await axios.delete(deleteUrl);
    //
    fetchTodos(); // we are getting wrong data here
  }
  async function toggleCompleted(id, completed) {
    const patchUrl = `http://localhost:8000/api/v1/todos/${id}`;
    await axios.patch(patchUrl, { completed: !completed });
    fetchTodos();
  }
  return (
    <div>
      <AddTodoForm fetchTodos={fetchTodos} />
      {todos.map((todo) => (
        <div
          key={todo._id}
          style={{ border: "2px solid white", margin: "1rem", padding: "1rem" }}
        >
          <p
            style={{
              textDecoration: todo.completed && "line-through",
              opacity: todo.completed && ".5",
            }}
          >
            {todo.title}
          </p>
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
          <button>update title</button>
          <button onClick={() => toggleCompleted(todo._id, todo.completed)}>
            Toggle Completed
          </button>
        </div>
      ))}
    </div>
  );
}
export default Home;
