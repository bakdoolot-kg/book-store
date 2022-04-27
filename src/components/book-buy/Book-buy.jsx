import React from "react";
import Button from "../button/Button";

import "./book-buy.css";

const BookBuy = ({ book }) => {
  return (
    <div className="bookBuy">
      <span className="bookBuy__price">{book.price} сом.</span>
      <Button type="primary" onClick={() => null}>
        В корзину
      </Button>
    </div>
  );
};

export default BookBuy;
