import React, { useState} from 'react';



function FinishButton({ children }) {
    let [color, setColor] = useState("red")
    

    function finishClick() {
        alert("Compra Finalizada")
        setColor("purple");
    }

    return (
        <button style={{ backgroundColor: color }} onClick={finishClick} className="btn">
            {children}
        </button>
    );
}


export default FinishButton;