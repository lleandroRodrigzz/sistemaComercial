import { Alert } from "react-bootstrap";
import FormCadastroCategoria from "./FormCadastroCategoria";
import TabelaCategoria from "../tabelas/TabelaCategoria";
import { categorias } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState(categorias);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        id: "",
        nomeCat: "",
        tipo: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='danger' style={{ fontSize: "42px" }}>
                    <h2>Cadastro de Categoria</h2>
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