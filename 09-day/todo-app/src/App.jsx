import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Learn React",
      comleted: false,
    },
    {
      id: "2",
      title: "Solve 1 DSA question",
      comleted: false,
    },
    {
      id: "3",
      title: "Revise React Concepts",
      comleted: false,
    },
  ]);
  function addTodo(newTodo) {
    console.log("add todo function called");
    console.log(newTodo);
    setTodos((todos) => [...todos, newTodo]);
    // update state
  }
  return (
    <div className="App">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
export default App;
