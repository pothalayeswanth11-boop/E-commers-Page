function Sidebar({ logout, setActivePage, user }) {
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
    <aside className="sidebar">
      <div className="sidebar-user">{displayName}</div>
      <nav>
        <ul>
          <li onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
            🏠 Home
          </li>
          <li onClick={() => setActivePage('products')} style={{ cursor: 'pointer' }}>
            📚 All Products
          </li>
          <li onClick={() => setActivePage('gaming')} style={{ cursor: 'pointer' }}>
            🎮 Gaming Laptops
          </li>
          <li onClick={() => setActivePage('normal')} style={{ cursor: 'pointer' }}>
            💻 Normal Laptops
          </li>
          <li onClick={() => setActivePage('cart')} style={{ cursor: 'pointer' }}>
            🛒 Cart
          </li>
          <li onClick={logout} style={{ cursor: 'pointer' }}>
            🔒 Logout
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
