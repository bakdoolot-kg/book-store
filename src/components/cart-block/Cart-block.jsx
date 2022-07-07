import React, {useCallback, useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import CartMenu from "../cart-menu/Cart-menu";
import ItemsInCart from "../items-in-cart/Items-in-cart";
import {BiCartAlt} from "react-icons/bi";
import {calcTotalPrice} from "../utils";
import "./cart-block.css";

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState()
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)
	const history = useHistory()

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false)
		history.push('/order/')
	}, [history])

	return (
		<div className="cartBlock">
			<ItemsInCart quantity={items.length}/>
			<BiCartAlt size={25} className="cartBlock__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
			<span className="cartBlock__total-price">{totalPrice} сом</span>
			{isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
		</div>
	);
};

export default CartBlock;
