import React from "react";
import { BiCartAlt } from "react-icons/bi";

import "./cart-block.css";

const CartBlock = () => {
  return (
    <div className="cartBlock">
      <BiCartAlt size={25} className="cartBlock__icon" />
      <span className="cartBlock__total-price">2600 сом</span>
    </div>
  );
};

export default CartBlock;
