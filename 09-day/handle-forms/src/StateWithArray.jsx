import { useState } from "react";

function StateWithArray() {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  function addTodo() {
    setTodos((todos) => [...todos, "new Todo"]);
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add new todo</button>
    </div>
  );
}
export default StateWithArray;
