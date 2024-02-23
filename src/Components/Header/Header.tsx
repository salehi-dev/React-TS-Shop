import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { CartContext } from "../../Context/CartContext";
import "./Header.css";

function Header() {
  const cart = useContext(CartContext);
  return (
    <header>
      <Link className="logo" to="/">
        LoopLend Shop
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>{cart.userCart.length}</span>
      </Link>
    </header>
  );
}

export default Header;
