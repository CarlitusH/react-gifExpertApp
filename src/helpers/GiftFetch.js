


export const  realizarFectAPI = async(categoria)=>{

        const api_key="PDkA64rluovVJWrPhbFLEfgMYM4c2XqA";
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=${api_key}`);
        const { data } = await resp.json(); 
       
        const infoImagenes = data.map((val) =>{
            return {
                id:val.id,
                titulo:val.title,
                url:val.images?.downsized_medium.url 
            }
        });


        //if(meta.msg === "OK"){
            //Desestructurandoconst [{titulo}] = infoImagenes;
            //infoImagenes.map(val =>setImagenes(img=>[...img,{id:val.id, titulo:val.titulo}]));
        //}

        return infoImagenes;
    }