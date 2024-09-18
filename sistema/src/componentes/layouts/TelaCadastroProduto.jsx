import { Alert } from "react-bootstrap";
import FormCadastroProduto from "./FormCadastroProduto";
import Pagina from "./Pagina";
import { useState } from "react";
import TabelaProduto from "../tabelas/TabelaProduto";
import { produtos } from "../dados/mockCategorias";

export default function TelaCadastroProduto(props) {
    
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos, setListaDeProdutos] = useState(produtos);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        descricao: "",
        precoCusto: "",
        precoVenda: "",
        qtdEstoque: "",
        urlImagem: "",
        dataValidade: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='info' style={{ fontSize: "42px" }}>
                    <h2>Cadastro de Produto</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaProduto listaDeProdutos={listaDeProdutos}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            produtoSelecionado={produtoSelecionado}
                            setProdutoSelecionado={setProdutoSelecionado}
                            setListaDeProdutos={setListaDeProdutos}
                            setExibirTabela={setExibirTabela} /> :

                        <FormCadastroProduto listaDeProdutos={listaDeProdutos}
                            produtoSelecionado={produtoSelecionado}
                            setProdutoSelecionado={setProdutoSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setListaDeProdutos={setListaDeProdutos}
                            setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );

}