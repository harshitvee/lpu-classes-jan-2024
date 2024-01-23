import Todo from "./Todo";
function TodoList({ todos, deleteTodo, toggleCompleted }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
export default TodoList;
