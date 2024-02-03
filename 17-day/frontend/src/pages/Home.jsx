import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoForm from "../ components/AddTodoForm";
// tomorrow will finish this todos app

// blog app express js
// authentication
// frontend

function Home() {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    const response = await axios.get("http://localhost:8000/api/v1/todos");
    const data = response.data;
    setTodos(data);
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <AddTodoForm />
      {todos.map((todo) => (
        <div
          key={todo.id}
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
          <button>Delete</button>
          <button>Toggle Completed</button>
        </div>
      ))}
    </div>
  );
}
export default Home;
