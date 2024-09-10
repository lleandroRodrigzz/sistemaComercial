import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return(
        <Alert className={"text-center"} variant="dark" style={{fontSize: "24px", color: "#000000"}}>
            <h1>
                {props.titulo || "Título não fornecido"}
            </h1>
        </Alert>
    );
}