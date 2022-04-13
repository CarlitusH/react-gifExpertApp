import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGridList } from "./components/GifGridList";


const FCGifExpert = ()=>{

    const [categories, setCategory] = useState(["HunterXHunter"]);

    //IMPORTAMOS el componente AddCategory
    return (<> 
        <h2>Gift Expert APP</h2>  
            <AddCategory seteaCaterogia={setCategory} categorias={categories}/>
        <hr></hr> 
        <ul> 
            { categories.map(val=> 
                <GifGridList key={ val } categoria={ val } />) }
        </ul>
    </>)

}

export default FCGifExpert;