import React from 'react'
import "./itemdetail.css"
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {
    return (
      <div className="main container">
        <img src={props.img}></img>
        <div>
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
        <h4>{props.price}</h4>
        </div>
        <Button>
          Ver más
        </Button>
        <ItemCount initial={1} stock={5} />
      </div>
    );
  }
  
export default ItemDetail;