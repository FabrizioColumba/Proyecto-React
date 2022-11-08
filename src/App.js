import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Tienda from "./components/Tienda/Tienda";
import CartProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import Contacto from "./components/Contacto/Contacto"
import Account from "./components/Account/Account";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={
              <ItemListContainer greeting="Bienvenidos a Gamer Shop"/>
            } />
            <Route path="/Tienda/" element={
              <Tienda greeting="Todos nuestros productos"/>
            } />
            <Route path="/category/:cat" element={
              <Tienda/>
            } />
            <Route path="/components/:id" element={
              <ItemDetailContainer />
            } />
            <Route path="/checkout/:orderid" element={
            <Checkout />
            } />
            <Route path="/Cart/" element={ 
            <Cart/>
            } />
            <Route path="/Account/" element={ 
            <Account/>
            } />
             <Route path="/Contacto/" element={ 
            <Contacto/>
            } />
            <Route path="*" element={<h1>Error 404: Te perdiste</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
