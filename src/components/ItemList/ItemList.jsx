import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import getItems from "../../Services/placas";

function ItemList(props) {
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

export default ItemList;