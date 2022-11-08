import React, { useContext } from 'react'
import {cartContext} from "../Context/CartContext"
function CartWidget() {
  const {totalProducts} = useContext(cartContext);
  return (
    <div>
      <i className="bi bi-cart2"></i>
      <span>{totalProducts() || ""}</span>
    </div>
  );
}

export default CartWidget