import { useState, useEffect } from "react";
import axios from "axios";
const endpoint = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [todos, setTodos] = useState([]);
  async function fetchData() {
    const response = await axios.get(endpoint);
    const data = response.data;
    const completedTodos = response.data.filter((todo) => todo.completed);
    console.log(completedTodos);
    setTodos(completedTodos);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <p>{todo.id}</p>
              <p>{todo.completed ? "completed" : "not completed"}</p>
              <p>{todo.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
