import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <ItemDetailContainer />
     <Footer />
    </div>
  );
}

export default App;
