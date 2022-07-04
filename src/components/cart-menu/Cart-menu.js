import React from 'react';
import {calcTotalPrice} from "../utils";
import Button from "../button/Button";
import CartItem from "../cart-item/Cart-item";
import "./cart-menu.css"

const CartMenu = ({items, onClick}) => {
	return (
		<div className="cartMenu">
			<div className="cartMenu__books-list">
				{
					items.length > 0 ? items?.map(book => <CartItem key={book.title} book={book} id={book.id}/>) : "Корзина пуста"
				}
			</div>
			{
				items.length > 0 ?
					<div className="cartMenu__arrange">
						<div className="cartMenu__total-price">
							<span>Итого: </span>
							<span>{calcTotalPrice(items)} сом</span>
						</div>
						<Button type="primary" size="m" onClick={onClick}>
							Оформить заказ
						</Button>
					</div>
					: null
			}
		</div>
	);
};

export default CartMenu;