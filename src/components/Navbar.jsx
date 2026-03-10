function Navbar({ cartCount, logout, user }) {
  let displayName = "User";
  if (user) {
    if (typeof user === "string") {
      displayName = user.split('@')[0] + " (Accountant)";
    } else if (user.name) {
      displayName = user.name + (user.role ? ` (${user.role})` : " (Accountant)");
    } else if (user.email) {
      displayName = user.email.split('@')[0] + " (Accountant)";
    }
  }

  return (
    <div className="navbar">
      <h2>💻 LaptopStore</h2>
      <div className="navbar-right">
        <span className="user-name">👤 {displayName}</span>
        <span>🛒 {cartCount}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
