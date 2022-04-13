import React,{useState} from 'react'
import Proptypes from "prop-types";


//Como parámetro recibimos la función seteaCaterogia desde el componente GiftExpertApp
export const AddCategory = ({seteaCaterogia}) => {
    
    const [inputVal, setInputVal] = useState("");

    //Función para cambiar el valor del input: Los input necesitan un valor inicial y un manejador que controle lo que se escriba
    const manejadorCambioI = (e)=>{
        //e= event de windows; e.target.value = Valor de lo que se escribe dentro del input
        setInputVal((iValue)=> iValue=e.target.value);
    }


    //Función para manejar el evento onsubmit (al precionar ENTER) del form
    const manejadorSubmit =  (e)=>{
        e.preventDefault();
        //Validamos y obtenemos el valor del inputVal para pasarlo al manejador de categoria y agregarlo a las categorías: seteaCaterogia
        //En caso inputVal sea enviado vacio o undefined se utilizará el valor "generico" y entrará al else
        let nuevoAnime = inputVal.trim()!=="" && inputVal!== undefined?inputVal:"generico";
        if(!nuevoAnime.includes("generico") && nuevoAnime){
            seteaCaterogia(categoria=>[nuevoAnime,...categoria]);
            setInputVal("");//Limpiamos inputVal
        }else{
            //La primera vez: Vendrá con "generico" y se le concatenará  "1" y así sucesivamente
            nuevoAnime = nuevoAnime + "1";
            //Actualizamos el valor de inputVal. La 2da vez ya valdrá "generico11" e irá aumentando, con ello NO se repetirá ningún valor
            setInputVal(nuevoAnime);
            
            seteaCaterogia(categoria=>[...categoria,nuevoAnime])
        }
        
    }

    return (

    <form onSubmit={manejadorSubmit}>
        <label htmlFor='idcatego'>
            <input type={"text"} id="idcatego" value={inputVal} onChange={manejadorCambioI} />
        </label>
    </form>

  )
}

AddCategory.propTypes = {
    seteaCaterogia : Proptypes.func.isRequired
}

