function Home({ user }) {
  let displayName = "Guest";
  if (user) {
    if (typeof user === "string") {
      displayName = user.split('@')[0];
    } else if (user.name) {
      displayName = user.name;
    } else if (user.email) {
      displayName = user.email.split('@')[0];
    }
  }

  return (
    <div className="home-container">
      <div className="welcome-card">
        <h3>👋 Welcome, {displayName}!</h3>
        <p>Select "📚 Products" from the sidebar to start browsing books, or "🛒 Cart" to view items you've added.</p>
      </div>
      <div className="quick-stats">
        <div className="stat-card">
          <h4>📚 Book Collection</h4>
          <p>Explore our curated selection of books across multiple categories.</p>
        </div>
        <div className="stat-card">
          <h4>📖 Categories</h4>
          <p>Self Help, Finance, Fiction, Programming, and more!</p>
        </div>
        <div className="stat-card">
          <h4>🛍️ Shopping</h4>
          <p>Add books to cart and manage your orders easily.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
