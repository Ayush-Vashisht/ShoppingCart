import axios from "axios";
import { useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";
import Products from "./Products";
import Cart from "./Cart";
const HomePage = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log(data.products);
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <Cart state={state} dispatch={dispatch} />
      <Products state={state} dispatch={dispatch} />
    </div>
  );
};

export default HomePage;
