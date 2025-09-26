import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import BookSearch from "./Booksearch";
import Reader from "./reader";

function App() {
  const [page, setPage] = useState("login");
  const [bookLink, setBookLink] = useState("");
  const [bookTitle, setBookTitle] = useState("");

  const handleRead = (link, title) => {
    setBookLink(link);
    setBookTitle(title);
    setPage("reader");
  };

  return (
    <div>
      {page === "login" && (
        <Login
          onLogin={() => setPage("search")}
          goSignup={() => setPage("signup")}
        />
      )}
      {page === "signup" && <Signup goLogin={() => setPage("login")} />}
      {page === "search" && <BookSearch onRead={handleRead} />}
      {page === "reader" && (
        <Reader
          bookLink={bookLink}
          title={bookTitle}
          goBack={() => setPage("search")}
        />
      )}
    </div>
  );
}

export default App;
