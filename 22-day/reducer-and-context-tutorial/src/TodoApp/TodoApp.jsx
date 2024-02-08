import { useReducer } from "react";
import Todos from "./Todos";
import AddTodoForm from "./AddTodoForm";

function reducer(todos, action) {
  if (action.type === "DELETE") {
    // update todos
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "TOGGLE") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return { ...todo };
      }
    });
  }
  if (action.type === "ADD") {
    return [...todos, action.payload.newTodo];
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
      <AddTodoForm dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}
export default TodoApp;
