import Todo from "./Todo";
function TodoList({ todos, deleteTodo, toggleCompleted, updateTitle }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          updateTitle={updateTitle}
        />
      ))}
    </div>
  );
}
export default TodoList;
