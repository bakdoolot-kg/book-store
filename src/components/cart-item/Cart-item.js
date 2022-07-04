import React from 'react';
import "./cart-item.css"

const CartItem = ({book}) => {
	return (
		<div className='cartItem'>
			<span>{book.title}</span>
			<div className="cartItem__price">
				<span>{book.price} сом</span>
			</div>
		</div>
	);
};

export default CartItem;