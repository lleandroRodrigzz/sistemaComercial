import { Alert } from "react-bootstrap";
import FormCadastroUsuario from "./FormCadastroUsuario";
import TabelaUsuario from "../tabelas/TabelaUsuario";
import { usuarios } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroUsuario(props) {
    const[exibirTabela, setExibirTabela] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='success' style={{fontSize: "42px"}}>
                    <h2>Cadastro de Usuario</h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaUsuario listaDeUsuarios={usuarios} setExibirTabela={setExibirTabela}/> :
                    <FormCadastroUsuario setExibirTabela={setExibirTabela}/>
                }
            </Pagina>
        </div>
    );
}