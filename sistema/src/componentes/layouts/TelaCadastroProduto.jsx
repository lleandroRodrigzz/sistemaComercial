import { Alert } from "react-bootstrap";
import FormCadProdutos from "./FormCadastroProduto";
import Pagina from "./Pagina";
import { useState } from "react";
import TabelaProdutos from "../tabelas/TabelaProduto";
import { produtos } from "../dados/mockCategorias";

export default function TelaCadastroProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='info' style={{ fontSize: "42px" }}>
                    <h2>Cadastro de Produto</h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaProdutos listaDeProdutos={produtos} setExibirTabela={setExibirTabela} /> :
                    <FormCadProdutos listaDeProdutos={produtos} setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );

}