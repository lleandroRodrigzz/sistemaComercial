import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return(
        <Alert className={"text-center"} variant="dark" style={{fontSize: "24px", backgroundColor:"#1a1d20", borderColor: "#565c63", color: "#dee2e6"}}>
            <h1>
                {props.titulo || "Título não fornecido"}
            </h1>
        </Alert>
    );
}