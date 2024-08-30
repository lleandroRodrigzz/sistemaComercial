import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <>
            <Cabecalho titulo="Sistema de Controlhe Gerencial" />
            <Menu />
            {
                props.children
            }
        </>
    );
}