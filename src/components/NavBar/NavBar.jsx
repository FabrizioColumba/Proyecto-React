import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import React from "react";
import Account from '../Account/Account';
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link to="/">
         <img className='imgHome' src={require("./logo.png")} alt="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/catalogo">Catalogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/contacto">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/nosotros">Nosotros</Link>
          </li>
        </ul>
        <ul className="navbar-nav iconos">
            <li className="nav-item">
                <Link className="nav-link" to="/cart">
                 <CartWidget />
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/account">
                    <Account />
                 </Link>
            </li>
         </ul>
      </div>
    </div>
  </nav>
    )
   }
export default NavBar;