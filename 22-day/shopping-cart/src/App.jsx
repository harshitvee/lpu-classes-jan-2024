import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import CartProvider from "./Contexts/CartProvider";
import Cart from "./pages/Cart";
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
      <RouterProvider router={router} />
    </CartProvider>
  );
}
export default App;
