import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { CartContextProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import { FilteredProductContextProvider } from "./contexts/FilteredProductContext";
import Products from "./components/Products";

function App() {
  return (
    <CartContextProvider>
      <FilteredProductContextProvider>
        <Routes>
          <Route>
            <Route
              path="/"
              element={
                <div className="relative">
                  <Header />
                  <Products />
                </div>
              }
            />
            <Route
              path="/cart"
              element={
                <div>
                  <Cart />
                </div>
              }
            />
          </Route>
        </Routes>
      </FilteredProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
