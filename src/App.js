import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <ItemListContainer greeting="Bienvenidos a Gamer Shop"/>
          }/>
           <Route path="/category/:cat" element={
            <ItemListContainer/>
          }/>
          <Route path="/components/:id" element={
            <ItemDetailContainer />
          }/>
          <Route path="/Cart/" element= {<h1>Detalles de compra</h1>} />
          <Route path="*" element={<h1>Error 404: Te perdiste</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
