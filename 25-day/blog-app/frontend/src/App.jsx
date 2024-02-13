// pages
// signup
// login
// home page
// single blog page
// layout
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBlogs from "./pages/MyBlogs";
import SingleBlog from "./pages/SingleBlog";
import Home from "./pages/Home";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CreateBlog from "./pages/CreateBlog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="create" element={<CreateBlog />} />
      <Route path="my-blogs" element={<MyBlogs />} />
      <Route path="/:id" element={<SingleBlog />} />
    </Route>
  )
);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
export default App;
