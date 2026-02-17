import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCart([]);
  };

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <>
      <Navbar cartCount={cart.length} logout={logout} />
      <Products addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
}

export default App;
