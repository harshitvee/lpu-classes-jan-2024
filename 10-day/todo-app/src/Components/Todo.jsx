function Todo({ todo, deleteTodo, toggleCompleted }) {
  const todoStyle = {
    padding: "1rem",
    marginTop: "1rem",
    border: "2px solid #454545",
  };
  function handleDelete() {
    deleteTodo(todo.id);
  }
  function handleToggle() {
    console.log("inside handle toggle");
    toggleCompleted(todo.id);
  }
  const titleStyle = {
    textDecoration: todo.completed && "line-through",
    opacity: todo.completed && "0.6",
  };
  return (
    <div style={todoStyle}>
      <p>id: {todo.id}</p>
      <p style={titleStyle}>title : {todo.title}</p>
      <p>completed: {todo.completed ? "true" : "false"}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle Completed</button>
    </div>
  );
}

// crud
export default Todo;
