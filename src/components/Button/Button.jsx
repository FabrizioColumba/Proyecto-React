import React, { useState} from 'react';

function Button({ children }) {
    let [color, setColor] = useState("red")

    function handleClick() {
        alert("Presiona Aceptar para ser redirigido")
        setColor("purple");

    }

    return (
        <button style={{ backgroundColor: color }} onClick={handleClick} className="btn">
            {children}
        </button>
    );
}

export default Button