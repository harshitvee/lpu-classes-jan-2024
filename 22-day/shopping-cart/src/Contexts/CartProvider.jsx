import { useReducer, useContext, createContext } from "react";

const CartContext = createContext();
function cartReducer(cart, action) {
  if (action.type === "ADD") {
    return [...cart, action.payload.newCartItem];
  }
  return cart;
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  function addToCart(newCartItem) {
    dispatch({ type: "ADD", payload: { newCartItem } });
  }
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
