
import Card from "./Card"
import React, { useState } from "react";
import Imagemdragall , {ima} from './Imagemdragall'
import styles from './Estilo.module.css'
import ligar from './butao/botao-ligado.png'
import desligar from './butao/interruptor.png'
function Biblioteca({numero}){
    const [atualiza, setAtualiza] = useState(ima[1])
    const [perdeu, setPerdeu] = useState('pedeu')
    const [ponto,setPonto] = useState(0)
    const [cor, setCor] =useState('red')
        const soma = () =>{
            setPonto(meu => meu + 1)
        }
function resete(){
    setPonto(0)
}

const mudarCor = () => {
    document.body.style.backgroundColor = '#000' // Aplica a cor no body
    let botao = document.getElementById('b')
    let buta = document.getElementById('d')
    let jogo = document.getElementById('jogo')
    let teste = document.getElementById('teste')
    if(botao){
        botao.style.display ='none';
    }
    if(buta){
        buta.style.display='block'
    }
    if(jogo){
        jogo.style.color='#fff'
        jogo.style.borderBottom='2px solid #fff'
    }
  };

 function desliga (){
    document.body.style.background = '#fff'
    let botao = document.getElementById('b')
    let buta = document.getElementById('d')
    let jogo = document.getElementById('jogo')
    if(botao){
        botao.style.display ='block'
    }
    if(buta){
        buta.style.display='none'
    }
    if(jogo){
        jogo.style.color='#000'
        jogo.style.borderBottom='2px solid #000'
    }
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
            <div className={styles.butao}>
            <button id='b' className={styles.b} onClick={mudarCor}><img src={ligar} alt='imagem'/></button>
            <button id='d' className={`${styles.b} ${styles.b1}`} onClick={desliga}><img src={desligar} url='imagem'/></button>
            </div>
            {ponto ==0 ?(
                <>
                <p className={styles.cor}>nenhum ponto no momento </p>
                </>
            ):(
                
                <>
                <div className={styles.di}>
                <p className={styles.cor}>ponto: {ponto}</p>
                <button className={styles.b} onClick={resete}  className={styles.resete}>reseta</button>
                </div>
                </>

            ) }
        </>
    )
}
export default Biblioteca  