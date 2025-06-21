import React from "react";
import { createRoot } from "react-dom/client";

// function Xxxx() {
//     return(
//         <>
//         </>

//     )
// }



function App() {
    return(
        // ... cokoliv - např. nějaká metoda
        <>
        <h1>Jsem App</h1>
        <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Porro veniam earum corrupti repellendus alias? Laudantium et repellendus corporis tenetur dolores aliquam sit exercitationem excepturi error quam. Iste dolores doloremque cupiditate?</p> 
        <img src="xxxx" alt="obr" />
        </>
    )
}










/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App/>);