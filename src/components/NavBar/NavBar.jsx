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
            <Link className="nav-link" to="/Tienda/">Tienda</Link>
          </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Componentes
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/category/placasdevideo">Placas</Link></li>
            <li><Link className="dropdown-item" to="/category/procesadores">Procesadores</Link></li>
            <li><Link className="dropdown-item" to="/category/rams">Rams</Link></li>
          </ul>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Contacto/">Contacto</Link>
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