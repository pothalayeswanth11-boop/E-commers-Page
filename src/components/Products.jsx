function Products({ addToCart }) {
  const books = [
    {
      id: 1,
      name: "Atomic Habits",
      price: 499,
      rating: 4.8,
      category: "Self Help",
      img: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
      id: 2,
      name: "Rich Dad Poor Dad",
      price: 399,
      rating: 4.6,
      category: "Finance",
      img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
    },
    {
      id: 3,
      name: "The Alchemist",
      price: 350,
      rating: 4.7,
      category: "Fiction",
      img: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
      id: 4,
      name: "Clean Code",
      price: 799,
      rating: 4.9,
      category: "Programming",
      img: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg"
    },
    {
      id: 5,
      name: "Think and Grow Rich",
      price: 299,
      rating: 4.5,
      category: "Motivation",
      img: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg"
    },
    {
      id: 6,
      name: "The Power of Habit",
      price: 420,
      rating: 4.6,
      category: "Self Help",
      img: "https://images-na.ssl-images-amazon.com/images/I/71cKdyH5AqL.jpg"
    },
    {
      id: 7,
      name: "Deep Work",
      price: 550,
      rating: 4.7,
      category: "Productivity",
      img: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
    },
    {
      id: 8,
      name: "Zero to One",
      price: 380,
      rating: 4.5,
      category: "Startup",
      img: "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg"
    },
    {
      id: 9,
      name: "The Psychology of Money",
      price: 450,
      rating: 4.8,
      category: "Finance",
      img: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
    },
    {
      id: 10,
      name: "Harry Potter",
      price: 699,
      rating: 4.9,
      category: "Fantasy",
      img: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"
    },
    {
      id: 11,
      name: "The Hobbit",
      price: 620,
      rating: 4.8,
      category: "Fantasy",
      img: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
      id: 12,
      name: "Ikigai",
      price: 320,
      rating: 4.6,
      category: "Self Help",
      img: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
    },
    {
      id: 13,
      name: "Start With Why",
      price: 410,
      rating: 4.6,
      category: "Leadership",
      img: "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg"
    },
    {
      id: 14,
      name: "The Subtle Art",
      price: 370,
      rating: 4.5,
      category: "Self Help",
      img: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg"
    },
    {
      id: 15,
      name: "Wings of Fire",
      price: 280,
      rating: 4.9,
      category: "Biography",
      img: "https://images-na.ssl-images-amazon.com/images/I/71kk3xQZt1L.jpg"
    },
    {
      id: 16,
      name: "The 5 AM Club",
      price: 360,
      rating: 4.4,
      category: "Productivity",
      img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg"
    },
    {
      id: 17,
      name: "The Monk Who Sold His Ferrari",
      price: 310,
      rating: 4.5,
      category: "Motivation",
      img: "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg"
    },
    {
      id: 18,
      name: "Sapiens",
      price: 720,
      rating: 4.8,
      category: "History",
      img: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg"
    },
    {
      id: 19,
      name: "1984",
      price: 290,
      rating: 4.7,
      category: "Classic",
      img: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
      id: 20,
      name: "The Great Gatsby",
      price: 260,
      rating: 4.6,
      category: "Classic",
      img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
    }
  ];

  return (
    <div className="products">
      {books.map((book) => (
        <div className="card" key={book.id}>
          <img src={book.img} alt={book.name} />
          <h3>{book.name}</h3>
          <p className="category">{book.category}</p>
          <p>⭐ {book.rating}</p>
          <p className="price">₹ {book.price}</p>
          <button onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
