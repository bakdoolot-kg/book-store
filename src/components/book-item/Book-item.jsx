import React from "react";
import BookBuy from "../book-buy/Book-buy";
import BookCover from "../book-cover/Book-cover";

import "./book-item.css";

const BookItem = ({ book }) => {
  return (
    <div className="bookItem">
      <BookCover image={book.coverImage} />
      <div className="bookItem__details">
        <span className="bookItem__title">{book.title}</span>
        <div className="bookItem__author">{book.author}</div>
        <div className="bookItem__buy">
          <BookBuy book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookItem;
