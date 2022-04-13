import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGridList = ({categoria}) => {
    

    //Hook personalizado que retorna un objeto con un arreglo (de los gifs solicitados al api) y un flag
    const {data:gifs, cargando} = useFetchGifs(categoria);
    

    console.log(gifs);
    console.log(cargando);

    return ( 
        <>
            <h3>{categoria}</h3>
            {cargando&&<p>cargando</p>}
            <div className='car-grid'>
                { gifs.map((img)=> <GifGridItem key={img.id} {...img} /> )}
            </div>
        </>
    )
}


GifGridList.defaultProps = {
    categoria:"Evangelion"
}

