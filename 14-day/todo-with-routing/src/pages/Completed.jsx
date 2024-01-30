function Completed({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div>
      {completedTodos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
        </div>
      ))}
    </div>
  );
}
export default Completed;
