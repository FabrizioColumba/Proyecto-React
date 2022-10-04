import React, {useState} from 'react'
import "./itemdetail.css"
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";

function ItemDetail(props) {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = () => {
    setGoToCart(true);
  }
    return (
      <div className="main container">
        <img src={props.img}></img>
        <div>
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
        <h4>{props.price}</h4>
        </div>
        {
          ( goToCart)
          ? <Link to="/Cart/">Finalizar Compra</Link>
          : <ItemCount initial={1} stock={5} onAddToCart={onAdd}/>
        }
      </div>
    );
  }
  
export default ItemDetail;