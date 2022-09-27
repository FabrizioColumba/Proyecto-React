import React from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
function ItemListContainer(props) {
  return (
    <div>
      <h1 className="title"><strong>{props.greeting}</strong></h1>
      <ItemList />
    </div>
  )
}

export default ItemListContainer;