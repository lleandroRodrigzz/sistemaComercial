import Pagina from './Pagina';
import Imagem404 from '../../assets/imagens/pagina404.png';

export default function Tela404(props) {
    return (
        <Pagina>
            <div style={{ display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            height: '50vh'}}>
                <img alt="Erro 404" src={Imagem404} />
            </div>
                <h1 className='text-center'>O recurso solicitado não existe!</h1>
        </Pagina>
    )
}