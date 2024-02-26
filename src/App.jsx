import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <HomePage />
              </div>
            }
          />
          
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;
