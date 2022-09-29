import React from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./item.css";
import {Link} from "react-router-dom";


function Item(props) {
  let { id, price, title, img, detail} = props;
  return (
    <div className="card">
    <div className="card-img">
      <img src={img} alt="card img"></img>
    </div>
    <div className="card-detail">
      <h3>{title}</h3>
      <p>{detail}</p>
      <h4>$ {price}</h4>
    </div>
    <Link to={`/placas/${id}`}>
    <Button>
        Ver más
    </Button>
    </Link>
    <ItemCount initial={1} stock={5}/>
    </div>
    

  );
}

export default Item;
