import React from "react";

function Reader({ bookLink, title, goBack }) {
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={goBack}>⬅ Back to Search</button>
      <h3>Reading: {title}</h3>

      {bookLink ? (
        <iframe
          src={bookLink}
          title={title}
          style={{ width: "100%", height: "80vh", border: "none" }}
        />
      ) : (
        <p>Sorry, no preview available for this book.</p>
      )}
    </div>
  );
}

export default Reader;
