import Todo from "./Todo";
function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
export default TodoList;
