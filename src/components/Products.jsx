import { useState } from "react";

function Products({ addToCart, cart, changeQuantity, laptopType }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");

  const laptops = [
    {
      id: 1,
      name: "MacBook Pro 14\"",
      description: "M3 Pro, 18GB RAM, 512GB SSD, Retina XDR Display",
      price: 159900,
      rating: 4.8,
      category: "Apple",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
    },
    {
      id: 2,
      name: "Dell XPS 15",
      description: "Intel i7 13th Gen, 16GB RAM, 1TB SSD, 4K OLED",
      price: 145000,
      rating: 4.6,
      category: "Dell",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
    },
    {
      id: 3,
      name: "HP Spectre x360",
      description: "Intel Evo i7, 16GB RAM, 512GB SSD, 2-in-1 Touch",
      price: 125000,
      rating: 4.7,
      category: "HP",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80"
    },
    {
      id: 4,
      name: "Lenovo ThinkPad X1",
      description: "Intel i7 vPro, 32GB RAM, 1TB SSD, Carbon Fiber",
      price: 139000,
      rating: 4.9,
      category: "Lenovo",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80"
    },
    {
      id: 5,
      name: "Asus ROG Zephyrus",
      description: "AMD Ryzen 9, RTX 4070, 32GB RAM, 240Hz Display",
      price: 180000,
      rating: 4.8,
      category: "Asus",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?w=800&q=80"
    },
    {
      id: 6,
      name: "MacBook Air M2",
      description: "M2 Chip, 8GB RAM, 256GB SSD, Fanless Design",
      price: 114900,
      rating: 4.8,
      category: "Apple",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80"
    },
    {
      id: 7,
      name: "Acer Swift 3",
      description: "AMD Ryzen 5, 8GB RAM, 512GB SSD, Ultra-light",
      price: 55000,
      rating: 4.4,
      category: "Acer",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80"
    },
    {
      id: 8,
      name: "Surface Pro 9",
      description: "Intel i5, 16GB RAM, 256GB Storage, Detachable",
      price: 105999,
      rating: 4.5,
      category: "Microsoft",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&q=80"
    },
    {
      id: 9,
      name: "Razer Blade 15",
      description: "Intel i9, RTX 4080, 32GB RAM, CNC Aluminum",
      price: 215000,
      rating: 4.7,
      category: "Razer",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80"
    },
    {
      id: 10,
      name: "MSI Stealth 15M",
      description: "Intel i7, RTX 3060, 16GB RAM, 144Hz FHD",
      price: 130000,
      rating: 4.4,
      category: "MSI",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&q=80"
    },
    {
      id: 11,
      name: "LG Gram 17",
      description: "Intel i7, 16GB RAM, 1TB SSD, 1.35kg Ultra-light",
      price: 140000,
      rating: 4.6,
      category: "LG",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80"
    },
    {
      id: 12,
      name: "Asus ZenBook 14",
      description: "Intel Evo i5, 16GB RAM, 512GB SSD, OLED Display",
      price: 98000,
      rating: 4.5,
      category: "Asus",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
    },
    {
      id: 13,
      name: "MacBook Pro 16\"",
      description: "M3 Max, 36GB RAM, 1TB SSD, Liquid Retina",
      price: 259900,
      rating: 4.9,
      category: "Apple",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
    },
    {
      id: 14,
      name: "Dell Alienware x14",
      description: "Intel i7, RTX 4060, 16GB RAM, Advanced Cooling",
      price: 165000,
      rating: 4.6,
      category: "Dell",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80"
    },
    {
      id: 15,
      name: "Lenovo Legion Pro 5",
      description: "AMD Ryzen 7, RTX 4070, 16GB RAM, 165Hz QHD+",
      price: 155000,
      rating: 4.7,
      category: "Lenovo",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=800&q=80"
    },
    // New Normal Laptops
    {
      id: 16,
      name: "Samsung Galaxy Book 3",
      description: "Intel i7, 16GB RAM, 512GB SSD, AMOLED DL",
      price: 134000,
      rating: 4.6,
      category: "Samsung",
      type: "Normal",
      img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?w=800&q=80"
    },
    // New Gaming Laptops
    {
      id: 17,
      name: "Acer Predator Helios 300",
      description: "Intel i7, RTX 3070 Ti, 16GB RAM, 165Hz Display",
      price: 145000,
      rating: 4.5,
      category: "Acer",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80"
    },
    {
      id: 18,
      name: "HP Omen 16",
      description: "AMD Ryzen 7, RTX 4060, 16GB RAM, OMEN Tempest Cooling",
      price: 132000,
      rating: 4.6,
      category: "HP",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80"
    },
    {
      id: 19,
      name: "Asus TUF Gaming F15",
      description: "Intel i7 12th Gen, RTX 3050, 16GB RAM, 144Hz FHD",
      price: 85000,
      rating: 4.3,
      category: "Asus",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?w=800&q=80"
    },
    {
      id: 20,
      name: "Gigabyte AORUS 15",
      description: "Intel i7, RTX 4070, 16GB RAM, 360Hz FHD Panel",
      price: 172000,
      rating: 4.8,
      category: "Gigabyte",
      type: "Gaming",
      img: "https://images.unsplash.com/photo-1618424181497-157f25b6ce5e?w=800&q=80"
    }
  ];

  // Filter laptops by type first
  const typeFilteredLaptops = laptopType === "All" ? laptops : laptops.filter((l) => l.type === laptopType);

  // Get unique categories based on the current type
  const categories = ["All", ...new Set(typeFilteredLaptops.map((l) => l.category))];

  // Filter laptops by search and category
  const filteredLaptops = typeFilteredLaptops.filter((laptop) => {
    const matchesSearch = laptop.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || laptop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Apply Sorting
  const sortedLaptops = [...filteredLaptops].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating; // High to Low rating
      default:
        return 0; // "featured" usually means original array order
    }
  });

  return (
    <div className="products-container">
      {/* Controls Section */}
      <div className="controls-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search laptops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <div className="category-filter">
            <select
              className="category-select filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled hidden>Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="sort-filter">
            <select
              className="category-select filter-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products">
        {sortedLaptops.length > 0 ? (
          sortedLaptops.map((laptop) => (
            <div className="amazon-card" key={laptop.id}>
              <div className="amazon-card-image">
                <img src={laptop.img} alt={laptop.name} />
              </div>
              <div className="amazon-card-content">
                <h3 className="amazon-title">{laptop.name} - {laptop.description}</h3>
                <div className="amazon-rating">
                  <span className="amazon-stars">
                    {"★".repeat(Math.round(laptop.rating))}
                    {"☆".repeat(5 - Math.round(laptop.rating))}
                  </span>
                  <span className="amazon-rating-text">{laptop.rating}</span>
                  <span className="amazon-rating-icon">v</span>
                </div>
                <div className="amazon-price-row">
                  <span className="amazon-currency">₹</span>
                  <span className="amazon-price">{laptop.price.toLocaleString("en-IN")}</span>
                </div>
                <p className="amazon-delivery">FREE delivery by <strong>Tomorrow</strong></p>
                <div className="amazon-actions">
                  {(() => {
                    const qty = cart ? cart.filter(c => c.id === laptop.id).length : 0;
                    if (qty > 0) {
                      return (
                        <div className="amazon-qty-controls">
                          <button onClick={() => changeQuantity(laptop.id, -1)}>-</button>
                          <span>{qty}</span>
                          <button onClick={() => changeQuantity(laptop.id, 1)}>+</button>
                        </div>
                      );
                    }
                    return (
                      <button className="amazon-add-btn" onClick={() => addToCart(laptop)}>
                        Add to cart
                      </button>
                    );
                  })()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>No laptops found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}

export default Products;
