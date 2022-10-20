import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext} from "../../Context/CartContext"
import "./cart.css"
import { addDoc, collection, getFirestore } from 'firebase/firestore';

function Cart(data) {
    const {cart, totalPrice} = useCartContext();
    const { removeProduct } = useCartContext();

    const order = {
        buyer: {
            name:"Fabrizio",
            email: "Fabriziocolumba@hotmail.com.ar",
            phone: "3416881320",
            address: "asssad"
        },

        items: cart.map(data => ({ id: data.id, title: data.title, price: data.price, quantity: data.quantity}
            
            )),
        total: totalPrice(),
    };

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    };

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
         <button onClick={handleClick}>Finalizar Compra</button>
    </div>   
  )

}

export default Cart