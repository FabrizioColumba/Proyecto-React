import React from "react";
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (
    <div>
      <h1 className="title"><strong>{props.greeting}</strong></h1>
    </div>
  )
  }
export default ItemListContainer;