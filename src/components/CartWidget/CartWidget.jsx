import React from 'react'
import {useCartContext} from "../../Context/CartContext"
function CartWidget() {
  const {totalProducts} = useCartContext();
  return (
    <div>
      <i className="bi bi-cart2"></i>
      <span>{totalProducts() || ""}</span>
    </div>
  );
}

export default CartWidget