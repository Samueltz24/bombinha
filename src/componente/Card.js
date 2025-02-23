import React, { useState } from "react";
import styles from './Estilo.module.css'
import Imagemdragall , {ima} from './Imagemdragall'
function Card({urlima,texto,numero,soma,nu}){
    const [image,setImage] = useState(null)
    const [clicado, setClicado] = useState(false)
    function Teste(){
        if (clicado) return
        if (numero === 1){
            setImage(ima[2])
            soma()
        setClicado()
        }
        else{
            setImage(ima[0])
        }
    }

    return(
        <>
            <div className={styles.ola}>
                <img className={styles.um} src={image || urlima} alt={texto} onClick={Teste}/>
            </div>
        </>
        
    )
}
export default Card 