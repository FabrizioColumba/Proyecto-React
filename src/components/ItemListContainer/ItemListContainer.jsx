import React from "react";
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (
    <div>
      <h1 className="title"><strong>{props.greeting}</strong></h1>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <imgs rc={"/assets/gamers.png"} className="d-block w-100" alt="foto gamer"/>
          </div>
          <div className="carousel-item">
            <img src={"/assets/gamers1.png"} className="d-block w-100" alt="foto gamer"/>
          </div>
          <div className="carousel-item">
            <img src={"/assets/gamers2.png"} className="d-block w-100" alt="foto gamer"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
export default ItemListContainer;