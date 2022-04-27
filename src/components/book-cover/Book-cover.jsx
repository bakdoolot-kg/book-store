import React from "react";

import "./book-cover.css";

const BookCover = ({ image = "" }) => {
  return (
    <div
      className="bookCover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default BookCover;
