import { useState } from "react";
import styles from "./Todo.module.css";
import { ImCross } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import EditTodo from "./EditTodo";
function Todo({ todo, deleteTodo, toggleCompleted, updateTitle }) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  function handleDelete() {
    deleteTodo(todo.id);
  }
  function handleToggle() {
    console.log("inside handle toggle");
    toggleCompleted(todo.id);
  }
  if (isUpdateMode) {
    return (
      <EditTodo
        id={todo.id}
        updateTitle={updateTitle}
        setIsUpdateMode={setIsUpdateMode}
        title={todo.title}
      />
    );
  }
  return (
    <div className={styles.todo}>
      <h3 className={todo.completed ? styles.completed : ""}>{todo.title}</h3>

      <div className={styles.buttonContainer}>
        <span onClick={() => setIsUpdateMode(true)} className={styles.btn}>
          <MdEdit />
        </span>
        <input
          type="checkbox"
          name="todo-checkbox"
          id="todo-checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className={styles.todoCheckbox}
        />
        <span onClick={handleDelete} className={styles.btn}>
          <ImCross />
        </span>
      </div>
    </div>
  );
}

// edit todo
// priority
// sort

// crud
export default Todo;
