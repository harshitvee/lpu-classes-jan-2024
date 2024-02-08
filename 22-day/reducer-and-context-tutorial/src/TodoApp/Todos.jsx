import Todo from "./Todo";
import { useTodos } from "./contexts/TodoProvider";

function Todos() {
  const { todos, dispatch } = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
export default Todos;
