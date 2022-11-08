import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from "../Context/CartContext"
import { useNavigate } from "react-router-dom";
import "./cart.css"
import { createBuyOrder } from "../../firebase/firestore";

function Cart(data) {
    const { cart, clearCart, totalPrice } = useContext(cartContext);
    const { removeProduct } = useContext(cartContext);
    const cartLenght = cart.length;
    const navigate = useNavigate();
    const context = useContext(cartContext);

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    function handleClick(event) {
        event.preventDefault();
        const orderData = {
          buyer: dataForm,
          items: cart,
          date: new Date(),
          total: totalPrice(),
        };
        createBuyOrder(orderData).then((orderid) => {
          navigate(`/checkout/${orderid}`);
         clearCart();
        });
      }

    // const handleClick = () => {
    //     const db = getFirestore();
    //     const ordersCollection = collection(db, "orders");
    //     addDoc(ordersCollection, order)
    //         .then(({ id }) => console.log(id))
    //     createBuyOrder(orderData).then((orderid) => {
    //         navigate(`/checkout/${orderid}`);
    //         emptyCart();
    //     });
    // };
    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;

        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }
    return (
        <>
            {cartLenght === 0 && (
                <>
                    <div>
                        <p>No hay elementos en el carrito</p>
                        <Link to="/tienda">A comparar!!</Link>
                    </div>
                </>
            )}
            {cartLenght > 0 && (
                <>
                    <div className='ItemCart'>
                        {cart.map(data => (
                            <div key={data.id}>
                                <img src={data.img} alt={data.title}></img>
                                <div>
                                    <p>Titulo: {data.title}</p>
                                    <p>Cantidad: {data.quantity}</p>
                                    <p>Precio:${data.price}</p>
                                    <p>Subtotal:${data.quantity * data.price}</p>
                                    <button onClick={() => removeProduct(data.id)}>Eliminar</button>
                                </div>
                                <div>
                                </div>
                            </div>
                        ))}
                        <p>
                            Total: ${totalPrice()}
                        </p>
                        <div className="form-container">
                            <h4 className="title">
                                Complete los siguientes datos para finalizar su compra
                            </h4>
                            <form className="form" onSubmit={handleClick}>
                                <div className="formulario">
                                    <div className="form-item">
                                        <label htmlFor="name">
                                            Nombre/s <span>*</span>
                                        </label>
                                        <input
                                            className="input"
                                            value={dataForm.name}
                                            name="name"
                                            type="text"
                                            onChange={inputChangeHandler}
                                            required
                                        />
                                    </div>

                                    <div className="form-item">
                                        <label htmlFor="surname">
                                            Apellido/s <span>*</span>
                                        </label>
                                        <input
                                            className="input"
                                            value={dataForm.surname}
                                            name="surname"
                                            type="text"
                                            onChange={inputChangeHandler}
                                            required
                                        />
                                    </div>

                                    <div className="form-item">
                                        <label htmlFor="name">
                                            Direccion <span>*</span>
                                        </label>
                                        <input
                                            className="input"
                                            value={dataForm.address}
                                            name="address"
                                            type="text"
                                            onChange={inputChangeHandler}
                                            required
                                        />
                                    </div>

                                    <div className="form-item">
                                        <label htmlFor="telefono">
                                            Teléfono <span>*</span>
                                        </label>
                                        <input
                                            className="input"
                                            value={dataForm.phone}
                                            name="phone"
                                            type="number"
                                            min={1}
                                            onChange={inputChangeHandler}
                                            required
                                        />
                                    </div>

                                    <div className="form-item">
                                        <label htmlFor="email">
                                            Email <span>*</span>
                                        </label>
                                        <input
                                            className="input"
                                            value={dataForm.email}
                                            name="email"
                                            type="text"
                                            onChange={inputChangeHandler}
                                            required
                                        />
                                    </div>
                                </div>
                                <button  type="submit" onClick={handleClick}>Finalizar Compra</button>
                            </form>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )

}

export default Cart