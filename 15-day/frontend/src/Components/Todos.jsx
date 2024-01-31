const endpoint = "/api/todos";
import { useEffect, useState } from "react";
import axios from "axios";
function Todos() {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    try {
      const response = await axios.get(endpoint);
      setTodos(response.data);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}
export default Todos;
