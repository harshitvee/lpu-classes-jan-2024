import { useState } from "react";

function StateWithArrays() {
  const [tasks, setTasks] = useState(["task A", "task B", "task C"]);

  function handleAdd() {
    // const newArray = [...tasks, "newTask"];
    // setTasks(newArray);
    setTasks((prevTasks) => {
      return [...prevTasks, "new Task"];
    });
  }
  return (
    <div>
      <h1>useState with Arrays</h1>
      <ul>
        {tasks.map((task) => (
          <li>
            <h3> {task}</h3>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add New Task</button>
    </div>
  );
}
export default StateWithArrays;
