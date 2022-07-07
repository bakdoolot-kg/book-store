import React from 'react';
import {useDispatch} from "react-redux";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {deleteItemFromCart} from "../../redux/cart/reducer";
import "./order-item.css"

const OrderItem = ({book}) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(deleteItemFromCart(book.id))
	}

	return (
		<div className="orderItem">
			<div className="orderItem__cover">
				<img src={book.coverImage} alt={book.title + book.id} className="orderItem__cover-img"/>
			</div>
			<div className="orderItem__title">
				<span>{book.title}</span>
			</div>
			<div className="orderItem__price">
				<span>{book.price} сом</span>
				<AiOutlineCloseCircle
					size={25}
					className="cartItem__delete-icon"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default OrderItem;