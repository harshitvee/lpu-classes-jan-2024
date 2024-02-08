import Todos from "./Todos";
import AddTodoForm from "./AddTodoForm";
import TodoProvider from "./contexts/TodoProvider";
function TodoApp() {
  return (
    <TodoProvider>
      <AddTodoForm />
      <Todos />
    </TodoProvider>
  );
}

export default TodoApp;
