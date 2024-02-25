/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => (acc + Number(curr.price)) * curr.qty, 0)
    );
  }, [cart]);
  const hanldeClick = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };
  return (
    <div className="flex flex-col gap-3 h-screen">
      {cart.length == 0 && (
        <span className="text-xl font-semibold">Cart is empty.</span>
      )}
      {cart.length > 0 &&
        cart.map((prod) => (
          <div key={prod.id} className="flex  items-center gap-5">
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className="object-contain w-40 h-40"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">{prod.title}</span>
              <span className="font-semibold">{`$${prod.price}`}</span>
              <div className="flex  gap-2 items-center mt-2">
                <button
                  className="border border-gray-400 px-2 "
                  onClick={() => {
                    hanldeClick(prod.id, prod.qty - 1);
                  }}
                >
                  -
                </button>
                <span>{prod.qty}</span>
                <button
                  className="border border-gray-400 px-2 "
                  onClick={() => {
                    hanldeClick(prod.id, prod.qty + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      <div className="flex flex-col">
        <span>Total: $ {total}</span>
        <button className="border border-gray-400 px-2 ">Pay now</button>
      </div>
    </div>
  );
};

export default Cart;
