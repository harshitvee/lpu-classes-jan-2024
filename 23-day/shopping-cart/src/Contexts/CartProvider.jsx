import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

// useReducer

// const [cart, dispatch] = useReducer(reducerFunction, initalState)

// when we want to change the state we will call the dispatch function

// in dispatch function we will pas the action object

// action object will contain type property

// then dispatch function will call reducer funciton

// inside reducer function we can check for action type and write the logic for state update

function cartReducer(cart, action) {
  if (action.type === "ADD_ITEM") {
    return [...cart, action.payload];
  }
  if (action.type === "INCREASE_QTY") {
    return cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, qty: cartItem.qty + 1 };
      } else {
        return { ...cartItem };
      }
    });
  }
  if (action.type === "REMOVE_ITEM") {
    return cart.filter((cartItem) => cartItem.id !== action.payload.id);
  }
  if (action.type === "DECREASE_QTY") {
    return cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, qty: cartItem.qty - 1 };
      } else {
        return { ...cartItem };
      }
    });
  }
  return cart;
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ dispatch, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
