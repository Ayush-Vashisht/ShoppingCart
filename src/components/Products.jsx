/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FilteredProductContext } from "../contexts/FilteredProductContext";

const Products = () => {
  const { state, dispatch } = useContext(CartContext);
  const { products, cart } = state;
  const { filteredProducts } = useContext(FilteredProductContext);

  return (
    <div className="grid grid-cols-4 gap-2">
      {filteredProducts.length > 0 &&
        filteredProducts.map((prod) => (
          <div key={prod.id} className="flex flex-col items-center ">
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className="object-contain h-40 w-40"
            />
            <span className="text-xl font-bold">{prod.title}</span>
            <span className="font-semibold">{`$${prod.price}`}</span>
            {cart.some((p) => p.id === prod.id) ? (
              <button
                className="border px-2 bg-red-400 text-white"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="border px-2 bg-blue-400 text-white"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: prod.id,
                      title: prod.title,
                      thumbnail: prod.thumbnail,
                      qty: prod.qty,
                      price: prod.price,
                    },
                  })
                }
              >
                Add to cart
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Products;
