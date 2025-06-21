import React from "react";
import { createRoot } from "react-dom/client";

import animalData from "./data/Animals";


function AnimalList({animals}) {
    return(
        
        <div>
            <h2>Seznam zvířat</h2>
            <ul>
                {
                animals.map(zvire => <Animal 
                    key = {zvire.id}
                name={zvire.name}
                type={zvire.type}
                age={zvire.age}
                />)
                }
                
            </ul>
        </div>
        
    )
}


function Animal({name, type, age} ) {
    return(
        <li>
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <p>Věk: {age} let</p>
        </li>
    )
}





function App() {
    return(
        <>
        <AnimalList animals = {animalData}/>
        </>
    )
}

/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);


