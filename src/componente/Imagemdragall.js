import imagem1 from '../imagem/bomba.jpg'
import imagem2 from '../imagem/soldado.jpg'
import imagem3 from '../imagem/sinalverde.avif'
const ima =[imagem1,imagem2,imagem3]
function Imagemdragall({urlima,texto} ){
    return(
        <img src={urlima} alt={texto}/>
    )
}

export {ima}
export default Imagemdragall