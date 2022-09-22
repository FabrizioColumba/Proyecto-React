import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import React from "react";
import Account from '../Account/Account';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a href="#">
         <img className='imgHome' src={require("./logo.png")} alt="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Catalogo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
        </ul>
        <ul className="navbar-nav iconos">
            <li className="nav-item">
                <a className="nav-link" href="#">
                 <CartWidget />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Account />
                 </a>
            </li>
         </ul>
      </div>
    </div>
  </nav>
    )
   }
export default NavBar;