import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../cart-block/Cart-block";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Book lib
        </Link>
      </div>

      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
