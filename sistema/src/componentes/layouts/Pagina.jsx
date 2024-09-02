import Cabecalho from "./Cabecalho";

export default function Pagina(props) {
    return (
        <>
            <Cabecalho titulo="Sistema de Controlhe Gerencial" />
            {
                props.children
            }
        </>
    );
}