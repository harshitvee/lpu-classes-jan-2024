import styles from "./Todo.module.css";
function Todo({ id, title, completed, dispatch }) {
  return (
    <div className={styles.todo}>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>completed: {completed ? "true" : "false"}</p>
      <button onClick={() => dispatch({ type: "DELETE", payload: { id: id } })}>
        Delete
      </button>
      <button>Toggle</button>
    </div>
  );
}
export default Todo;
