import React, { useState} from 'react';
import "./button.css";

function Button({ children }) {
    let [color, setColor] = useState("lightblue")

    function handleClick() {
        alert("Clickeado!")
        setColor("purple");

    }

    return (
        <button style={{ backgroundColor: color }} onClick={handleClick} clasName="btn">
            {children}
        </button>
    );
}

export default Button