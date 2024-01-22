// initial mount --> when your component mount on the screen for the first time

// react creates the copy of that initial mount (virtual DOM)

// when state changes , react create new virtual DOM

// now we have 2 virtual doms

// react compare both virtual doms

// calculate the difference and hand it over to ReactDOM / React Native

// reactDOM , react native updates the real dom best way possible

// ------------ key prop ---------------

// key prop : unique

// uuid

// indexes : dont use indexes

import { useState } from "react";
function KeyProp() {
  const [todos, setTodos] = useState([
    { title: "todo 1", id: "1" },
    { title: "todo 2", id: "2" },
    { title: "todo 3", id: "3" },
    { title: "todo 4", id: "4" },
    { title: "todo 5", id: "5" },
    { title: "todo 6", id: "6" },
  ]);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default KeyProp;
