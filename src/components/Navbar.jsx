function Navbar({ cartCount, logout }) {
  return (
    <div className="navbar">
      <h2>📚 BookStore</h2>
      <div>
        🛒 {cartCount}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
