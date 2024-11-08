import { Alert } from "react-bootstrap";
import FormCadastroFornecedor from "./formularios/FormCadastroFornecedor";
import TabelaFornecedor from "./tabelas/TabelaFornecedor";
import { fornecedores } from "../../dados/mockDados";
import Pagina from "../layouts/Pagina";
import { useState } from "react";

export default function TelaCadastroFornecedor(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeFornecedores, setListaDeFornecedores] = useState(fornecedores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        nome: "",
        categoria: "",
        email: "",
        cidade: "",
        estado: "",
        cnpj: ""
    });
    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='warning' style={{ fontSize: "42px", color: "#3d3a1b" }}>
                    <h2>Cadastro de Fornecedores</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaFornecedor listaDeFornecedores={listaDeFornecedores}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            fornecedorSelecionado={fornecedorSelecionado}
                            setFornecedorSelecionado={setFornecedorSelecionado}
                            setListaDeFornecedores={setListaDeFornecedores}
                            setExibirTabela={setExibirTabela} /> :

                        <FormCadastroFornecedor listaDeFornecedores={listaDeFornecedores}
                            fornecedorSelecionado={fornecedorSelecionado}
                            setFornecedorSelecionado={setFornecedorSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setListaDeFornecedores={setListaDeFornecedores}
                            setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );
}