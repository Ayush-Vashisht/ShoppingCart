/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";
import axios from "axios";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
