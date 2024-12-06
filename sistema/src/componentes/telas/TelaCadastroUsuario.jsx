import { Alert } from "react-bootstrap";
import FormCadastroUsuario from "./formularios/FormCadastroUsuario";
import TabelaUsuario from "./tabelas/TabelaUsuario";
//import { usuarios } from "../../dados/mockDados";
import Pagina from "../layouts/Pagina";
import { useState, useEffect } from "react";
import { consultarUsuario } from '../../servicos/servicoUsuario'

export default function TelaCadastroUsuario(props) {

    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo:"",
        nomeUsuario: "",
        emailUsuario: "",
        senhaUsuario: "",
        tipoUsuario: ""
    });

    useEffect(() => {
        consultarUsuario().then((lista) => {
            setListaDeUsuarios(lista);
        });
    }, []); //listaVazia -> didMount

    return (
        <div>
            <Pagina>
                <Alert className='alert-custom' variant='dark'>
                    <h2>Cadastro de Usuarios</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaUsuario listaDeUsuarios={listaDeUsuarios}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            usuarioSelecionado={usuarioSelecionado}
                            setUsuarioSelecionado={setUsuarioSelecionado}
                            setListaDeUsuarios={setListaDeUsuarios}
                            setExibirTabela={setExibirTabela} /> :

                        <FormCadastroUsuario listaDeUsuarios={listaDeUsuarios}
                            usuarioSelecionado={usuarioSelecionado}
                            setUsuarioSelecionado={setUsuarioSelecionado}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setListaDeUsuarios={setListaDeUsuarios}
                            setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );
}