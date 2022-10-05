import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import getItems, { getItemsByCategory } from "../../Services/data";
import "./tienda.css"
import {useParams} from "react-router-dom"

function Catalogo(props) {
    let [data, setData] = useState([]);
    console.log(useParams())
  const {cat} = useParams();
  
    useEffect(() => {
      if (cat === undefined){
        getItems().then((respuestaDatos) => setData(respuestaDatos));
      }
      else {
        getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
      }
    }, []);
  
    return (
        <div>
          <h1 className="title"><strong>{props.greeting}</strong></h1>
          <div className="main container">
            {data.map((item) => {
              return (
                <Item
                  key={item.key}
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

export default Catalogo