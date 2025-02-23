
import Card from "./Card"
import React, { useState } from "react";
import Imagemdragall , {ima} from './Imagemdragall'
import styles from './Estilo.module.css'
function Biblioteca(){
    const [ponto,setPonto] = useState(0)
        const soma = () =>{
            setPonto(meu => meu + 1)
        }
    return(
        <>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={2} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            <Card urlima={ima[1]} texto='nada' numero={1} soma={soma}/>
            {ponto ==0 ?(
                <p className={styles.cor}>nenhum ponto no momento</p>
            ):(
                <p className={styles.cor}>ponto: {ponto}</p>
            )}
        </>
    )
}
export default Biblioteca 