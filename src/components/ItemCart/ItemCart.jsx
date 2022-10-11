import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import "-"

function ItemCart(data) {
    const { removeProduct } = useCartContext();
  return (
    <div className='ItemCart'>
        <img src={data.img} alt ={data.title}></img>
        <div>
        <p>Titulo: {data.title}</p>
        <p>Cantidad: {data.quantity}</p>
        <p>Precio:{data.price}</p>
        <p>Subtotal:{data.quantity * data.price}</p>
        <button onClick={() => removeProduct(data.id)}>Eliminar</button>
        </div>
    </div>   
  )
}

export default ItemCart