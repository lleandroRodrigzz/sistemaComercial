import { Alert } from "react-bootstrap";
import FormCadastroProduto from "./formularios/FormCadastroProduto";
import Pagina from "../layouts/Pagina";
import { useEffect, useState } from "react";
import TabelaProduto from "./tabelas/TabelaProduto";
import { consultarProduto } from "../../servicos/servicoProduto.js";

export default function TelaCadastroProduto(props) {

    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos, setListaDeProdutos] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        codigo: 0,
        descricao: "",
        precoCusto: 0,
        precoVenda: 0,
        qtdEstoque: 0,
        urlImagem: "",
        dataValidade: "",
        categoria: {}
    });

    useEffect(() => {
        consultarProduto().then((lista) => {
            setListaDeProdutos(lista);
        });
    }, []); //listaVazia -> didMount

    return (
        <div>
            <Pagina>
                <Alert className='alert-custom' variant='dark'>
                    <h2>Cadastro de Produtos</h2>
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