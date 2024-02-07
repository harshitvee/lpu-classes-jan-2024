import Todo from "./Todo";
import { useTodos } from "../context/TodosProvider";
import styles from "../App.module.css";
function TodoList() {
  const { todos, clearAllTodos } = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
      {todos.length > 0 ? (
        <button
          className={styles.clearAllTodosBtn}
          onClick={() => {
            clearAllTodos();
          }}
        >
          Clear All Todos
        </button>
      ) : null}
    </div>
  );
}
export default TodoList;
