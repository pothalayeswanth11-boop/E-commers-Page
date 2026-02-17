function Books() {
  const bookList = [
    { id: 1, name: "Atomic Habits", author: "James Clear" },
    { id: 2, name: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { id: 3, name: "The Alchemist", author: "Paulo Coelho" },
    { id: 4, name: "Clean Code", author: "Robert C. Martin" }
  ];

  return (
    <div className="books-container">
      <h2>Available Books</h2>
      <ul>
        {bookList.map((book) => (
          <li key={book.id}>
            <strong>{book.name}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
