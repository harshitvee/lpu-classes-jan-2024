function Todo({ todo }) {
  return (
    <div
      key={todo.id}
      style={{
        border: "2px solid white",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <p>{todo.title}</p>
      <p>{todo.completed ? "completed" : "not completed"}</p>
      <button>Delete Todo</button>
      <button>Toggle Completed</button>
    </div>
  );
}
export default Todo;
