import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return(
        <Alert variant="dark" className="cabecalho-custom">
            <h1>
                {props.titulo || "Título não fornecido"}
            </h1>
        </Alert>
    );
}