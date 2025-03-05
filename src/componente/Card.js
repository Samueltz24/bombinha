import React, { useState } from "react";
import styles from './Estilo.module.css'
import Imagemdragall , {ima} from './Imagemdragall'
function Card({urlima,texto,numero,soma,Te}){
    const [image,setImage] = useState(urlima)
    const [clicado, setClicado] = useState(false)
    function Teste(){

        if (clicado) {
            setImage(urlima); // Reseta para a imagem original
            setClicado(false);
        } else {
            if (numero === 1) {
                setImage(ima[2]);
                soma();
            } else {
                setImage(ima[0]);

            }
            setClicado(false);
        }
    }
function te(){
    alert('ola')
}
    return(
        <>
            <div className={styles.ola}>
                <img className={styles.um} src={image} alt={texto} onClick={Teste}/>
            </div>
        </>
    )
}
export default Card 