import React from "react";

import "./book-cover.css";

const BookCover = ({ image = "" }) => {
  return (
    <div
      className="bookCover"
      // style={{ backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "60%", height: "500px" }}
      style={{ backgroundImage: `url(${image})`}}
    ></div>
  );
};

export default BookCover;
