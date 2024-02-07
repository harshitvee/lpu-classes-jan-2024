// prop drilling

import { useState } from "react";
import Child from "./Child";

// propdrilling
// parent --> child --> grandchild

// 5 level deep
// 10 level deep

// context api

import { createContext } from "react";

const UserContext = createContext();

function ContextTut() {
  const [user, setUser] = useState("Harshit");
  return (
    <UserContext.Provider value={user}>
      <div
        style={{
          backgroundColor: "darkblue",
          padding: "3rem",
        }}
      >
        <h1>Parent</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}
export default ContextTut;
export { UserContext };
