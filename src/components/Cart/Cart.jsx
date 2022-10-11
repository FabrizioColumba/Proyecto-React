import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from "../../Context/CartContext"
import "./cart.css"

function Cart(data) {
    const {cart, totalPrice} = useCartContext();
    const { removeProduct } = useCartContext();
    if (cart.lenght === 0) {
        return (
            <>
               <p>No hay elementos en el carrito</p> 
               <Link to="/tienda">A comparar!!</Link>          
            </>
        )
    }
  return (
    <div className='ItemCart'>
        {cart.map(data =>(
        <div key={data.id}>
                <img src={data.img} alt ={data.title}></img>
            <div>
                <p>Titulo: {data.title}</p>
                <p>Cantidad: {data.quantity}</p>
                <p>Precio:${data.price}</p>
                <p>Subtotal:${data.quantity * data.price}</p>
                <button onClick={() => removeProduct(data.id)}>Eliminar</button>
            </div>
        </div>
        ))}
         <p>
         Total: ${totalPrice()}
         </p>
    </div>   
  )

}

export default Cart