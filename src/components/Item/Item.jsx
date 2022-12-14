import React from "react";
import Button from "../Button/Button";
import "./item.css";
import {Link} from "react-router-dom";


function Item(props) {
  let {key, id, price, title, img, detail,} = props;
  return (
    <div className="card">
    <div className="card-img">
      <div>{key}</div>
      <img src={img} alt="card img"></img>
    </div>
    <div className="card-detail">
      <h3>{title}</h3>
      <p>{detail}</p>
      <h4>$ {price}</h4>
    </div>
    <Link to={`/components/${id}`}>
    <Button>
        Ver más
    </Button>
    </Link>
    </div>
  );
}

export default Item;
