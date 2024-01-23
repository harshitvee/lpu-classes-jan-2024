function Todo({ todo }) {
  const todoStyle = {
    padding: "1rem",
    marginTop: "1rem",
    border: "2px solid #454545",
  };
  return (
    <div style={todoStyle}>
      <p>id: {todo.id}</p>
      <p>title : {todo.title}</p>
      <p>completed: {todo.completed ? "true" : "false"}</p>
    </div>
  );
}
export default Todo;
