import React from 'react';
import {useSelector} from "react-redux";
import OrderItem from "../../components/order-item/Order-item";
import {calcTotalPrice} from "../../components/utils";
import "./order-page.css"

export const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart)

	if (items.length < 1) {
		return <h2>Корзина пуста</h2>
	}

	return (
		<div className="orderPage">
			<div className="orderPage__left">
				{items.map(book => <OrderItem book={book}/>)}
			</div>
			<div className="orderPage__right">
				<div className="orderPage__total-price">
					<span>
						{items.length === 1 ? `${items.length} книга на сумму ` :
							items.length > 4 ? `${items.length} книг на сумму ` : `${items.length} книги на сумму ` }{calcTotalPrice(items)} сом
					</span>
				</div>
			</div>
		</div>
	);
};