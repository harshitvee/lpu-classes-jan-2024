import { BASE_URL } from "../constants";
import useAxiosGet from "../hooks/useAxiosGet";
import { useParams } from "react-router-dom";
function SingleBlog() {
  const { id } = useParams();
  const {
    error,
    isLoading,
    data: singleBlog,
  } = useAxiosGet({ endpoint: BASE_URL + `/${id}`, sendToken: true });
  if (isLoading) {
    return <h1>Loading </h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return <div>{JSON.stringify(singleBlog)};</div>;
}
export default SingleBlog;
