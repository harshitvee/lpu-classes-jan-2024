import styles from "./Todo.module.css";
import { useTodos } from "./contexts/TodoProvider";
function Todo({ id, title, completed }) {
  const { dispatch } = useTodos();
  return (
    <div className={styles.todo}>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>completed: {completed ? "true" : "false"}</p>
      <button onClick={() => dispatch({ type: "DELETE", payload: { id: id } })}>
        Delete
      </button>
      <button onClick={() => dispatch({ type: "TOGGLE", payload: { id: id } })}>
        Toggle
      </button>
    </div>
  );
}
export default Todo;
