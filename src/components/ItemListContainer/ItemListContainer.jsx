import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import getItems from "../../Services/placas";
import "./ItemListContainer.css"

function ItemListContainer(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <h1 className="title"><strong>{props.greeting}</strong></h1>
      <div className="main container">
        {data.map((item) => {
          return (
            <Item
              id={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}></Item>
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;