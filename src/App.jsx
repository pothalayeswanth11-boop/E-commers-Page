import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [cart, setCart] = useState([]);
  const [activePage, setActivePage] = useState('products');

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  // modify quantity by delta (+1 or -1)
  const changeQuantity = (bookId, delta) => {
    setCart((prev) => {
      if (delta > 0) {
        const item = prev.find((b) => b.id === bookId);
        return item ? [...prev, item] : prev;
      } else {
        // remove one instance
        const index = prev.findIndex((b) => b.id === bookId);
        if (index !== -1) {
          const newArr = [...prev];
          newArr.splice(index, 1);
          return newArr;
        }
        return prev;
      }
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLoggedInUser("");
    setCart([]);
    localStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("loggedInUser");
  };

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home user={loggedInUser} />;
      case 'products':
        return <Products addToCart={addToCart} cart={cart} changeQuantity={changeQuantity} laptopType="All" />;
      case 'gaming':
        return <Products addToCart={addToCart} cart={cart} changeQuantity={changeQuantity} laptopType="Gaming" />;
      case 'normal':
        return <Products addToCart={addToCart} cart={cart} changeQuantity={changeQuantity} laptopType="Normal" />;
      case 'cart':
        return <Cart cart={cart} changeQuantity={changeQuantity} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Sidebar logout={logout} setActivePage={setActivePage} user={loggedInUser} />
      <div className="main">
        <Navbar cartCount={cart.length} logout={logout} user={loggedInUser} />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
