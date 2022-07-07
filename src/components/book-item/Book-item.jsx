import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import BookBuy from "../book-buy/Book-buy";
import BookCover from "../book-cover/Book-cover";
import {setCurrentBook} from "../../redux/books/reducer";
import "./book-item.css";

const BookItem = ({ book }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentBook(book))
    history.push(`/book/${book.id}/`)
  }

  return (
    <div className="bookItem" onClick={handleClick}>
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
