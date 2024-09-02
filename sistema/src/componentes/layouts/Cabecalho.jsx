import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return(
        <Alert className={"text-center"} variant="dark" style={{fontSize: "24px"}}>{props.titulo || "Título não fornecido"}</Alert>
    );
}