import { createContext, useReducer, useContext } from "react";
const TodosContext = createContext();

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
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <TodosContext.Provider value={{ dispatch, todos }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
export default TodoProvider;
