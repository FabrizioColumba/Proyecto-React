import React from 'react'
import "./itemdetail.css"


function ItemDetail(props) {
    return (
      <div className="main container">
        <img src={props.img}></img>
        <div>
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
        <h4>{props.price}</h4>
        </div>
      </div>
    );
  }
  
export default ItemDetail;