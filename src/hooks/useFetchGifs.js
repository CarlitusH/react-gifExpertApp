import { useEffect, useState } from "react"
import {realizarFectAPI} from "../helpers/GiftFetch"


//Esta función se ejecutará al menos dos veces cuando sea llamada. 1ra Devolverá data {data:[], cargando:true}, la 2da en {data:[se asigna data], cargando:false}
//Esto porque llama a una promesa y porque al utilizar:
//useState = Refresca el estado cada vez que cambia, por eso llamará indeterminadamente a la función que conecta con el API porque al cargar varios resultados siempre cambia el estado
//useEffect = Solo refresca el estado en caso cambie la categoría (es decir si agregamos una nueva categoría) enviada desde el GifGridList
const useFetchGifs = (categoria) => {
    const [data, setData] = useState({data:[], cargando:true})

    //Con el useEfect podemos ejecutar la llamada al API, SOLO cuando CAMBIE alguna de las dependencias, en este caso la única dependencia es "[categoria]"
    useEffect(()=>{
        realizarFectAPI(categoria).then(rpta=>setData({data:rpta,cargando:false}))

    },[categoria]);

    return data;
}

export default useFetchGifs;