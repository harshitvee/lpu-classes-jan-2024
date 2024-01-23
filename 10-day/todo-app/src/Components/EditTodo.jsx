import { useState } from "react";

import styles from "./EditTodo.module.css";
function EditTodo({ id, updateTitle, setIsUpdateMode, title: prevTitle }) {
  const [title, setTitle] = useState(prevTitle || "");
  function handleSubmit(e) {
    e.preventDefault();
    updateTitle(id, title);
    setIsUpdateMode(false);
  }
  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      <input
        className={styles.editInput}
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button className={styles.confirmButton}>Confirm</button>
    </form>
  );
}
export default EditTodo;
