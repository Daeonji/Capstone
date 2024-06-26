import React, { useState, useEffect } from "react";
import Book from "./Book";
import pic from "..//src//images/library2.jpg";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books?status=checkedout")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data received from the server
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        <img
          src={pic}
          alt="Library"
          style={{ width: "100%", height: "300px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "17%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <div>
            <h1>CHECKED OUT BOOKS:</h1>
          </div>
        </div>
      </div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyleType: "none",
          padding: 0,
        }}
      >
        {books &&
          books.map((book, i) => (
            <li
              key={i}
              style={{
                marginRight: "20px",
                marginBottom: "30px",
                width: "calc(33.33% - 20px)",
              }}
            >
              <Book book={book} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default Books;
