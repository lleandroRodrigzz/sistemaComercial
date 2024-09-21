import { Alert } from "react-bootstrap";
import FormCadastroUsuario from "./FormCadastroUsuario";
import TabelaUsuario from "../tabelas/TabelaUsuario";
import { usuarios } from "../dados/mockCategorias";
import Pagina from "./Pagina";
import { useState } from "react";

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios, setListaDeUsuarios] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        nomeUsuario: "",
        emailUsuario: "",
        senhaUsuario: "",
        tipoUsuario: ""
    });


    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='success' style={{ fontSize: "42px" }}>
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