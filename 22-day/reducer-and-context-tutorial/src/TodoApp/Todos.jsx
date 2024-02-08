import Todo from "./Todo";

function Todos({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
export default Todos;
