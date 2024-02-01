// useState, useEffect
// useParams
import { useParams } from "react-router-dom";
function SingleUser() {
  const { id } = useParams();
  return <h2>Hello User With id : {id}</h2>;
}
export default SingleUser;
