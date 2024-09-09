import { Alert } from "react-bootstrap";
import FormCadastroCliente from './FormCadastroCliente';
import TabelaCliente from "../tabelas/TabelaCliente";
import { clientes } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    const[exibirTabela, setExibirTabela] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='primary' style={{ fontSize: "42px" }}>
                    <h2>Cadastro de Cliente</h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaCliente listaDeClientes={clientes} setExibirTabela={setExibirTabela}/> :
                    <FormCadastroCliente setExibirTabela={setExibirTabela}/>
                }
            </Pagina>
        </div>
    );

}