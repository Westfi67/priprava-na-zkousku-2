import React from "react";
import { createRoot } from "react-dom/client";

function Animal({name, age, type}) {
return(
    <div className="karta">
        <h2>{name}</h2>
        <p>Typ: {type}</p>
        <p>Věk: {age} let</p>
    </div>
)
}



function App() {
return(
    <>
    <Animal name='Žofka' type = 'žirafa' age = '7' />
    <Animal name='Béďa' type = 'lachtan' age = '3' />
   
    </>
)
}






/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
