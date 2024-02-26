/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Products from "./Products";
import { FilteredProductContext } from "../contexts/FilteredProductContext";

const Searchbar = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const { state, dispatch } = useContext(CartContext);
  const { products, cart } = state;
  const { filteredProducts, setFilteredProducts } = useContext(
    FilteredProductContext
  );

  useEffect(() => {
    const filteredItem = products.filter((prod) =>
      prod.title.toLowerCase().includes(searchedItem.toLowerCase())
    );
    console.log(filteredItem);
    setFilteredProducts(filteredItem);
  }, [searchedItem, products,setFilteredProducts]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className=" border border-black px-1"
        value={searchedItem}
        onChange={(e) => setSearchedItem(e.target.value)}
      />
    </div>
  );
};
export default Searchbar;
