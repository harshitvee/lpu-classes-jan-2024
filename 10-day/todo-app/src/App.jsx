import { useState } from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
function App() {
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

  return (
    <div>
      <AddTodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
export default App;

// create a function in app (addTodo)
// that function(addTodo) will take newTodo as input
// then this function (addTodo) will add newTodo to app state

// pass this function to addTodoForm via prop
// accept this function inside AddTodoForm

// onSubmit event
// create newTodo (already done)
// call that function (addTodo)
