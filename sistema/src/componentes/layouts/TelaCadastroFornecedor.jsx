import { Alert } from "react-bootstrap";
import FormCadastroFornecedor from "./FormCadastroFornecedor";
import TabelaFornecedor from "../tabelas/TabelaFornecedor";
import { fornecedores } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroFornecedor(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='warning' style={{ fontSize: "42px", color: "#3d3a1b"}}>
                    <h2>Cadastro de Fornecedor</h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaFornecedor listaDeFornecedores={fornecedores} setExibirTabela={setExibirTabela}/> :
                    <FormCadastroFornecedor setExibirTabela={setExibirTabela}/>
                }
            </Pagina>
        </div>
    );
}