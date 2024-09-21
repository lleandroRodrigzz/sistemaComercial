import { Alert } from "react-bootstrap";
import FormCadastroEntregador from './FormCadastroEntregador';
import TabelaEntregador from "../tabelas/TabelaEntregador";
import { entregadores } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroEntregador(props) {
    
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregadores, setListaDeEntregadores] = useState(entregadores);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [entregadorSelecionado, setEntregadorSelecionado] = useState({
        id: "",
        nome: "",
        cnh: "",
        fotoCnh: "",
        veiculo: "",
        placaV: "",
        capacidadeMax: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='dark' style={{ fontSize: "42px", borderColor:'black'}}>
                    <h2>Cadastro de Entregadores</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaEntregador listaDeEntregadores={listaDeEntregadores}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            entregadorSelecionado={entregadorSelecionado}
                            setEntregadorSelecionado={setEntregadorSelecionado}
                            setListaDeEntregadores={setListaDeEntregadores}
                            setExibirTabela={setExibirTabela} /> :

                        <FormCadastroEntregador listaDeEntregadores={listaDeEntregadores}
                            entregadorSelecionado={entregadorSelecionado}
                            setEntregadorSelecionado={setEntregadorSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setListaDeEntregadores={setListaDeEntregadores}
                            setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );

}
