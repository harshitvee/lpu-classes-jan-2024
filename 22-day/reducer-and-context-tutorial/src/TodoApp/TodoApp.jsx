import { useReducer } from "react";
import Todos from "./Todos";

function reducer(todos, action) {
  if (action.type === "DELETE") {
    // update todos
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  return todos;
}
const initialTodos = [
  { id: "1", title: " Task A", completed: false },
  { id: "2", title: " Task B", completed: true },
  { id: "3", title: " Task C", completed: false },
];
function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <div>
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}
export default TodoApp;
