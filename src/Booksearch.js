import React, { useState } from "react";

function BookSearch({ onRead }) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    if (!query.trim()) return;
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = await res.json();
    setBooks(data.items || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Books</h2>
      <input
        type="text"
        placeholder="Search by title, author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchBooks}>Search</button>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div
              key={book.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <img
                src={
                  info.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/128x180?text=No+Image"
                }
                alt={info.title}
                style={{ width: "128px", height: "180px" }}
              />
              <h4 style={{ fontSize: "14px" }}>{info.title}</h4>
              <button
                onClick={() =>
                  onRead(
                    info.previewLink || "",
                    info.title || "No Title Available"
                  )
                }
              >
                Read
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookSearch;
