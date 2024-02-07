import { useContext } from "react";
import { UserContext } from "./ContextTut";
function GrandChild() {
  const user = useContext(UserContext);
  return (
    <div
      style={{
        backgroundColor: "darkolivegreen",
        padding: "3rem",
      }}
    >
      <h3>GrandChild : {user}</h3>
    </div>
  );
}
export default GrandChild;
