import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <footer className='text-white py-4 bg-dark'>
        <div className='container'>
          <nav className='row'>
            <Link to="/" className='col-12 col-md-3 d-flex alling-items-center justify-content-center'>
              <img src='/assets/logo3.png' className='mx-2' height={150}></img>
            </Link>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weigh-bold mb-2'>Gamers</li>
              <li className='text-center'>En este sitio encontraras lo mejor para armar tu pc.</li>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weigh-bold mb-2'>Enlaces</li>
              <li>
                <Link to="/"  className='text-reset'>Inicio</Link>
              </li>
              <li>
                <Link to="/Tienda"  className='text-reset'>Tienda</Link>
              </li>
              <li>
                <Link to="/category/placasdevideo"  className='text-reset'> Placas</Link>
              </li>
              <li>
                <Link to="/category/procesadores"  className='text-reset'>Procesadores</Link>
              </li>
              <li>
                <Link to="/category/rams"  className='text-reset'>Rams</Link>
              </li>
              <li>
                <Link to="/Contacto" className='text-reset'>Contacto</Link>
              </li>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
              <li className='font-weigh-bold mb-2'>Siguenos</li>
              <li className='d-flex justify-content-between'>
                <i className="bi bi-facebook"/>
                <i className="bi bi-instagram"/>
                <i className="bi bi-twitter"/>
              </li>
            </ul>
            <div className='container'>
              <p className='text-center'>Realizado por Fabrizio Columba</p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer