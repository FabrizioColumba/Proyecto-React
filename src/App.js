import './App.css';
import Header from "./components/Header/Header"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Cards/Cards';
import FlexWrapper from './components/FlexWrapper/FlexWrapper';
import ItemCount from './components/ItemCount/ItemCount';
import Footer from "./components/Footer/Footer"


import React from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Bienvenido a Gamer Shop" />
      <Cards/>
      <FlexWrapper>
        <ItemCount/>
     </FlexWrapper>
     <Footer />
    </div>
  );
}

export default App;
