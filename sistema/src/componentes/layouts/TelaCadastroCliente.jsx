import { Alert } from "react-bootstrap";
import FormCadastroCliente from './FormCadastroCliente';
import TabelaCliente from "../tabelas/TabelaCliente";
import { clientes } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeClientes, setListaDeClientes] = useState(clientes);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState({
        nome: "",
        email: "",
        cidade: "",
        estado: "",
        cpf: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='primary' style={{ fontSize: "42px" }}>
                    <h2>Cadastro de Clientes</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaCliente listaDeClientes={listaDeClientes}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            clienteSelecionado={clienteSelecionado}
                            setClienteSelecionado={setClienteSelecionado}
                            setListaDeClientes={setListaDeClientes}
                            setExibirTabela={setExibirTabela} /> :

                        <FormCadastroCliente listaDeClientes={listaDeClientes}
                            clienteSelecionado={clienteSelecionado}
                            setClienteSelecionado={setClienteSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setListaDeClientes={setListaDeClientes}
                            setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );

}