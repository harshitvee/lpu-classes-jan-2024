import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CartProvider from "./Contexts/CartProvider";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    <CartProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </CartProvider>
  );
}
export default App;
