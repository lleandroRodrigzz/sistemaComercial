import { Alert } from "react-bootstrap";
import FormCadastroCategoria from "./formularios/FormCadastroCategoria";
import TabelaCategoria from "./tabelas/TabelaCategoria";
//import { categorias } from "../../dados/mockDados";
import Pagina from "../layouts/Pagina";
import { useState,useEffect } from "react";
import { consultarCategoria } from "../../servicos/servicoCategoria";

export default function TelaCadastroCategoria(props) {

    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        codigo: "",
        descricao: ""
    });

    useEffect(() => {
        consultarCategoria().then((lista) => {
            setListaDeCategorias(lista);
        });
    }, []); //listaVazia -> didMount

    return (
        <div>
            <Pagina>
                <Alert className='alert-custom' variant='dark'>
                    <h2>Cadastro de Categorias</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaCategoria listaDeCategorias={listaDeCategorias}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            categoriaSelecionada={categoriaSelecionada}
                            setCategoriaSelecionada={setCategoriaSelecionada}
                            setListaDeCategorias={setListaDeCategorias}
                            setExibirTabela={setExibirTabela} /> :

                        <FormCadastroCategoria listaDeCategorias={listaDeCategorias}
                            categoriaSelecionada={categoriaSelecionada}
                            setCategoriaSelecionada={setCategoriaSelecionada}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setListaDeCategorias={setListaDeCategorias}
                            setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );
}