import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Products />} />
      <Route path="cart" element={<Cart />} />
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
