import { createContext, useContext, useState } from "react";
export const TodosContext = createContext();
function TodosProvider({ children }) {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Complete Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "Write Code",
      completed: true,
    },
  ]);
  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }
  function toggleCompleted(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      })
    );
  }
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  function updateTitle(id, title) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title };
        } else {
          return { ...todo };
        }
      })
    );
  }
  function clearAllTodos() {
    setTodos([]);
  }
  return (
    <TodosContext.Provider
      value={{
        updateTitle,
        deleteTodo,
        toggleCompleted,
        addTodo,
        todos,
        clearAllTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
export function useTodos() {
  return useContext(TodosContext);
}
export default TodosProvider;
