import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "../button/Button";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/reducer";
import "./book-buy.css";

const BookBuy = ({ book }) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === book.id)

  const handleBuy = (e) => {
    e.stopPropagation()

    if (isItemInCart) {
      dispatch(deleteItemFromCart(book.id))
    } else {
      dispatch(setItemInCart(book))
    }

  }

  return (
    <div className="bookBuy">
      <span className="bookBuy__price">{book.price} сом.</span>
      <Button
        type={ isItemInCart ? "secondary" : "primary"}
        onClick={handleBuy}
      >
        { isItemInCart ? 'Убрать из корзины' : 'В корзину'}
      </Button>
    </div>
  );
};

export default BookBuy;
