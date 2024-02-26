/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export const FilteredProductContext = createContext([]);

export function FilteredProductContextProvider({ children }) {
  const { state, dispatch } = useContext(CartContext);
  const { products, cart } = state;
  const [filteredProducts, setFilteredProducts] = useState(products);
  return (
    <FilteredProductContext.Provider value={{ filteredProducts, setFilteredProducts }}>
      {children}
    </FilteredProductContext.Provider>
  );
}
