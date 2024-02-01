import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
// 100 users
import Home from "./pages/Home";
import Users from "./pages/Users";
import SingleUser from "./pages/SingleUser";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<SingleUser />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
